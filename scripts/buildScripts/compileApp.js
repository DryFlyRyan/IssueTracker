/* the following is based largely on the CRA build script */

import webpack from 'webpack';
import checkRequiredFiles from 'react-dev-utils/checkRequiredFiles';
import formatWebpackMessages from 'react-dev-utils/formatWebpackMessages';
import printBuildError from 'react-dev-utils/printBuildError';
import path from 'path';

import {
  logError,
  logInfo,
  logWarning,
} from '../../config/chalk.config';
import paths from '../../config/paths';

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

// Ensure environment variables are read.
require('../../config/env');

const configFactory = require(path.resolve(paths.appPath, 'config/webpack.config')); // eslint-disable-line import/no-dynamic-require
const config = configFactory('production');

function runWebpack() {
  return new Promise((resolve, reject) => {
    logInfo('- starting: new webpack build (This can take a few minutes)');

    const compiler = webpack(config);

    compiler.run((err, stats) => {
      if (err) {
        return reject(err);
      }

      const messages = formatWebpackMessages(stats.toJson({}, true));

      if (messages.errors.length) {
        // Only keep the first error. Others are often indicative
        // of the same problem, but confuse the reader with noise.
        if (messages.errors.length > 1) {
          messages.errors.length = 1;
        }
        return reject(new Error(messages.errors.join('\n\n')));
      }

      if (
        process.env.CI &&
        (typeof process.env.CI !== 'string' ||
          process.env.CI.toLowerCase() !== 'false') &&
        messages.warnings.length
      ) {
        logWarning('Treating warnings as errors because process.env.CI = true.\n' +
          'Most CI servers set it automatically.');
        return reject(new Error(messages.warnings.join('\n\n')));
      }

      return resolve({
        warnings: messages.warnings,
      });
    });
  });
}

export default function compileApp() {
  return new Promise((resolve, reject) => {
    logInfo('\nstarting: compiling application');

    // Warn and crash if required files are missing
    if (!checkRequiredFiles([paths.appHtml, paths.appIndexJs])) {
      logError(`Required build files could not be located in ${paths.appHtml} and ${paths.appIndexJs}`);
      return reject();
    }

    runWebpack()
      .then(
        ({ warnings }) => {
          logInfo('- finished: new webpack build');

          if (warnings.length) {
            logWarning('warning: Compiled with warnings');
            logWarning(warnings.join('\n\n'));
            return reject(warnings);
          }

          logInfo('finished: compiling application');
          return resolve();
        },
        (err) => {
          printBuildError(err);
          return reject(err);
        },
      );
  });
}
