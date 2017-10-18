const fs = require('fs-extra');

const logDir = __dirname + '/logs';
const logFile = logDir + '/app.log';

fs.stat(logDir)
  .catch((err) => fs.mkdir(logDir))
  .then(() => fs.appendFile(logFile, 'Ligne 1\n'))
  .then(() => fs.appendFile(logFile, 'Ligne 2\n'))
  .then(() => fs.appendFile(logFile, 'Ligne 3\n'))
  .then(() => fs.appendFile(logFile, 'Ligne 4\n'))
  .then(() => fs.appendFile(logFile, 'Ligne 5\n'))
  .then(() => console.log('Logs Done'))
  .catch(err => console.log(err.message));
