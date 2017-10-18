const fs = require('fs-extra');

const logDir = __dirname + '/logs';
const logFile = logDir + '/app.log';

(async function () {
  try {
    await fs.stat(logDir);
  }
  catch(err) {
    await fs.mkdir(logDir);
  }

  try {
    await fs.appendFile(logFile, 'Ligne 1\n');
    await fs.appendFile(logFile, 'Ligne 2\n');
    await fs.appendFile(logFile, 'Ligne 3\n');
    await fs.appendFile(logFile, 'Ligne 4\n');
    await fs.appendFile(logFile, 'Ligne 5\n');
    console.log('Logs Done');
  }
  catch(err) {
    console.log(err.message);
  }
}());
