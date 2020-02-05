import path from 'path';
import fs from 'fs-extra';
import AdmZip from 'adm-zip';

import {
  logInfo,
  logWarning,
} from '../../config/chalk.config';
import { appBuild, appPath } from '../../config/paths';
import { titleCase } from './helpers';
import { getClientPrefix } from './constants';

function generateFileName(srcFile, isMeta) {
  // get the prefix if there is one
  const clientPrefix = getClientPrefix() || '';
  const appName = process.env.APP_NAME; // assuming this is ok due to check in build.js
  const firstDot = srcFile.indexOf('.');
  const fileRoot = titleCase(srcFile.substr(0, firstDot)).replace('-main', '');
  const fileType = titleCase(srcFile.substr(firstDot + 1, srcFile.indexOf('.', firstDot)));
  const metaSuffix = isMeta ? '-meta.xml' : '';

  return `${clientPrefix}${appName}${fileRoot}${fileType}.resource${metaSuffix}`;
}

function getJsFilesForPackage() {
  logInfo('- starting: locating compiled JS files (sub-processes executed in parallel)');

  return new Promise((resolve, reject) => {
    const appFiles = [];

    fs.readdir(path.resolve(appBuild, 'app'), (err, files) => {
      files.forEach((file) => {
        const baseName = file.toLocaleLowerCase().replace('.map', '');
        const existingIndex = appFiles.findIndex((elem) => {
          return elem[0] === baseName;
        });

        if (existingIndex >= 0) {
          appFiles[existingIndex].push(file);
        } else {
          appFiles.push([file]);
        }
      });

      if (appFiles.length <= 0) {
        return reject(new Error('No files found'));
      }

      logInfo('  - Files:');
      for (const file of files) { // eslint-disable-line no-restricted-syntax
        logInfo(`    - ${file}`);
      }

      logInfo('- finished: locating compiled JS files');
      return resolve(appFiles);
    });
  });
}

function createZipResources(fileList) {
  logInfo('- starting: creating zipped resource files');
  return new Promise((resolve) => {
    fileList.forEach((fileSet) => {
      const zip = new AdmZip();
      let hasMap = false;

      fileSet.forEach((file) => {
        hasMap = hasMap || file.search(/.map$/) > 0;
        zip.addLocalFile(path.resolve(appBuild, 'app', file));
      });

      zip.writeZip(path.resolve(
        appBuild,
        'sfPackage',
        'staticresources',
        generateFileName(fileSet[0]),
      ));

      if (!hasMap) {
        logWarning(`no map file found for: ${fileSet[0]}`);
      }
    });

    logInfo('- finished: creating zipped resource files');
    return resolve();
  });
}

function copyPackageXml() {
  logInfo('- starting: copying default package.xml into SF package');
  return new Promise((resolve, reject) => {
    fs.copyFile(
      path.resolve(appPath, 'scripts/buildScripts/sfAssets', 'package.xml'),
      path.resolve(appBuild, 'sfPackage', 'package.xml'),
      (err) => {
        if (err) {
          return reject(err);
        }

        logInfo('- finished: copying default package.xml into SF package');
        return resolve();
      },
    );
  });
}

function copyFileMetadata(fileList) {
  logInfo('- starting: copying meta files over for resources');
  const filePromises = fileList.map((fileSet) => {
    return new Promise((resolve, reject) => {
      fs.copyFile(
        path.resolve(appPath, 'scripts/buildScripts/sfAssets', 'resource-meta.xml'),
        path.resolve(appBuild, 'sfPackage/staticresources', generateFileName(fileSet[0], true)),
        (err) => {
          if (err) {
            return reject(err);
          }

          return resolve();
        },
      );
    });
  });

  return new Promise((resolve, reject) => {
    Promise.all(filePromises).then(() => {
        logInfo('- finished: copying meta files over for resources');
        resolve();
      },
      (err) => {
        reject(err);
      });
  });
}

export default function prepSalesforcePackage() {
  logInfo('\nstarting: building SF package');

  return new Promise((resolve, reject) => {
    getJsFilesForPackage()
      .then(
        (files) => {
          Promise.all([
            createZipResources(files),
            copyPackageXml(),
            copyFileMetadata(files),
          ])
            .then(
              () => {
                logInfo('finished: building SF package');
                return resolve();
              },
              (err) => {
                return reject(err);
              },
            );
        },
        (err) => {
          // this section is for errors only in the getJsFilesForPackage method
          return reject(err);
        },
      );
  });
}
