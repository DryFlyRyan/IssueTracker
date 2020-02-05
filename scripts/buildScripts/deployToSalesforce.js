import path from 'path';
import meta from 'jsforce-metadata-tools';
import {
  logError,
  logInfo,
} from '../../config/chalk.config';
import { appBuild } from '../../config/paths';

export default function deployToSalesforce() {
  logInfo('\nstarting: deploying to SF environment');

  return new Promise((resolve, reject) => {
    const appName = process.env.APP_NAME.toUpperCase();
    const targetEnv = process.env.ENV || '';
    const baseUserName = process.env.SF_BASE_USERNAME;

    let username, password;

    if(targetEnv && baseUserName && process.env[`SF_${targetEnv.toUpperCase()}_PASSWORD`]) {
      console.log('- using env Configuration');
      username = `${baseUserName}.${targetEnv.toLowerCase()}`;
      password = process.env[`SF_${targetEnv.toUpperCase()}_PASSWORD`];
    } else {
      console.log('- using app configuration');
      username = process.env[`${appName}_SF_USERNAME`] || process.env.SF_USERNAME;
      password = process.env[`${appName}_SF_PASSWORD`] || process.env.SF_PASSWORD;
    }

    if (!username || !password) {
      return reject(new Error('missing username or password'));
    }

    const server = username
      .replace(username.substring(0, username.lastIndexOf('.') + 1), '')
      .toUpperCase();

    logInfo(`- target environment: ${server}`);

    const loginObject = {
      username,
      password: `${password}`,
      loginUrl: 'https://test.salesforce.com',
      version: '36.0',
      pollTimeout: 5 * 60 * 1000,
    };

    const folderPath = path.resolve(appBuild, 'sfPackage');

    meta.deployFromDirectory(folderPath, loginObject)
      .then((res) => {
        if (!res.success) {
          return reject(new Error('Deploy Failed'));
        }

        try {
          if (res.success && res.status.toLowerCase() === 'succeeded') {
            logInfo(`- deployed successfully to ${server}!!`);
            logInfo('finished: deploying to SF environment');
            return resolve();
          }

          logError('- deployment failed');
          meta.reportDeployResult(res, console, true);
          return reject(res);
        } catch (err) {
          return reject(err);
        }
      })
      .catch((err) => {
        return reject(err);
      });
  });
}
