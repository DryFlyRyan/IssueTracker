/* eslint-disable import/no-dynamic-require, global-require */

import fs from 'fs';
import path from 'path';
import * as lockfile from '@yarnpkg/lockfile';
import { dependencyGroups, getFriendlyName } from './constants';

import {
  logInfo,
} from '../../config/chalk.config';
import paths from '../../config/paths';

export default async function compileLibInfo() {
  return new Promise((resolve, reject) => {
    logInfo('\nstarting: compiling list of installed dependencies');

    let packageFile;
    let yarnFile;

    try {
      // grab the package.json file
      packageFile = require(paths.appPackageJson);

      // pull in and parse the yarn file using the yarn lockfile parse method
      yarnFile = lockfile.parse(fs.readFileSync(path.resolve(paths.appPath, 'yarn.lock'), 'utf8'));
    } catch (err) {
      return reject(err);
    }

    // provide some basic debug info
    let appData = {};
    appData.client = getFriendlyName() || 'Cake';
    appData.version = packageFile.version;

    // now iterate over the libs and insert their records
    const libs = dependencyGroups.reduce((depData, dependencyGroup) => {
      depData[dependencyGroup] = packageFile[dependencyGroup] && Object.keys(packageFile[dependencyGroup]).reduce((acc, val) => { // eslint-disable-line no-param-reassign, max-len
        const regex = new RegExp(`^@?${val}@`);
        const libVersion = Object.keys(yarnFile.object).find((elem) => { return regex.test(elem); });
        acc[val] = libVersion.substr(libVersion.lastIndexOf('@') + 1);
        return acc;
      }, {});

      return depData;
    }, {});

    // merge the data
    appData = Object.assign({}, appData, libs);

    // write the file
    fs.writeFile(
      path.resolve(path.resolve(paths.appPath, 'appPackagesList.json')),
      JSON.stringify(appData, null, 2),
      (err) => {
        if (err) {
          return reject(err);
        }

        logInfo('finished: compiling list of installed dependencies');
        return resolve();
      },
    );
  });
}
