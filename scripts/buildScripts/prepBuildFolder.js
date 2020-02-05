import fs from 'fs-extra';
import { logInfo } from '../../config/chalk.config';
import paths from '../../config/paths';

export default function prepBuildFolder() {
  return new Promise((resolve, reject) => {
    logInfo('\nstarting: Emptying build folder');

    // this function will delete the contents of the folder if it exists, or create a new folder if it does not
    fs.emptyDir(paths.appBuild, (err) => {
      if (err) {
        return reject(err);
      }
      logInfo('finished: Emptying build folder');
      return resolve();
    });
  });
}
