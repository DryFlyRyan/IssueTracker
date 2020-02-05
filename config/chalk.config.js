// Centralized configuration for chalk, which is used to add color to console.log statements.
import chalk from 'chalk';

export const chalkError = chalk.red;
export const chalkSuccess = chalk.green;
export const chalkWarning = chalk.yellow;
export const chalkProcessing = chalk.blue;
export const chalkSection = chalk.black.bgBlue;

export const logInfo = function logInfo(msg) {
  console.log(msg);
};

export const logError = function logError(msg) {
  console.log(chalkError(msg));
};

export const logWarning = function logWarning(msg) {
  console.log(chalkWarning(msg));
};
