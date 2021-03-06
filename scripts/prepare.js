/* eslint-disable no-console */
require('shelljs');
const chalk = require('chalk');
const {
  getPackageJson,
  compile,
  copyLicence,
  copyReadmeToDist,
} = require('./prepare-common');

const packageJson = getPackageJson();

compile(packageJson);

copyLicence();

console.log(
  chalk.gray(
    `Built: ${chalk.bold(`${packageJson.name}@${packageJson.version}`)}`
  )
);
