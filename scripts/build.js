/**
 * This script works as the conductor for all of the build tasks
 *
 * Params:
 * <name>: <type> <(default)>
 *
 * client: string ("Cake")
 * Flag used to target specific client builds.
 * Currently, "Pinnacol" and "Cake" are the only available options.
 */
import {
  chalkError,
  logError,
  logInfo,
} from '../config/chalk.config';
import compileApp from './buildScripts/compileApp';
import compileLibInfo from './buildScripts/compileLibInfo';
import deployToSalesforce from './buildScripts/deployToSalesforce';
import prepBuildFolder from './buildScripts/prepBuildFolder';
import prepSalesforcePackage from './buildScripts/prepSalesforcePackage';
import { getFriendlyName } from './buildScripts/constants';

// order matters
const tasks = [
  { name: 'Prep Build Folder', stage: 0, yarnCommand: 'build:prep', command: prepBuildFolder, description: 'Wipes the content of the \'dist\' folder' }, // eslint-disable-line max-len, object-curly-newline
  { name: 'Compile Dependencies Info', stage: 1, yarnCommand: 'build:appInfo', command: compileLibInfo, description: 'Builds the JSON file containing the client, version and dependencies' }, // eslint-disable-line max-len, object-curly-newline
  { name: 'Compile Application', stage: 2, yarnCommand: 'build:compile', command: compileApp, description: 'Runs the webpack build process, placing the resulting files in the \'dist\\app\' folder' }, // eslint-disable-line max-len, object-curly-newline
  { name: 'Prep Salesforce Package', stage: 3, yarnCommand: 'build:prepSfPackage', command: prepSalesforcePackage, description: 'Builds up the Salesforce package containing the static resources and associated metadata' }, // eslint-disable-line max-len, object-curly-newline
  { name: 'Deploy to Sandbox', stage: 4, yarnCommand: 'build:deploy', command: deployToSalesforce, description: 'Deploys the Salesforce package to your sandbox based on \'<APP_NAME>_SF_USERNAME\' and \'<APP_NAME>_SF_PASSWORD\' env variables' }, // eslint-disable-line max-len, object-curly-newline
];

const appName = process.env.APP_NAME;
const showList = process.env.SHOW_BUILD_STAGES || false;
const targetBuildStage = process.env.BUILD_STAGE;

async function conductor() {
  if (showList) {
    logInfo('\nBuild Commands are as follows. \nEach build stage includes all preceding steps:');
    for (const task of tasks) { // eslint-disable-line no-restricted-syntax
      console.log(` - ${chalkError(task.yarnCommand)} - (stage ${task.stage}) ${task.description}`);
    }

    return 0;
  }

  let hadError = false;
  logInfo('\n##################\n# STARTING BUILD #\n##################');

  const clientName = getFriendlyName() || 'Cake';
  logInfo(` - Building application for: ${chalkError(clientName)}`);

  if (!appName) {
    logError('process.env variable APP_NAME is required ' +
      'and should match the app name prefix applied to your project\'s static resources');
    hadError = true;
  } else {
    // turns out that you can not use Array.prototype.forEach with async as it expects ONLY synchronous function  ¯\_(ツ)_/¯
    for (const task of tasks) { // eslint-disable-line no-restricted-syntax
      if (!hadError && task.stage <= targetBuildStage) {
        try {
          await task.command(); // eslint-disable-line no-await-in-loop
        } catch (e) {
          hadError = true;
          logError(e);
          break;
        }
      }
    }
  }

  if (hadError) {
    logError('\n#################\n# BUILD FAILED #\n#################');
  } else {
    logInfo('\n##################\n# BUILD COMPLETE #\n##################');
  }
}

// .then() is just to make my linter happy - it doesnt like ignoring the return of a promise
conductor().then();
