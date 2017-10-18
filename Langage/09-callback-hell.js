const fs = require('fs');

const logDir = __dirname + '/logs';
const logFile = logDir + '/app.log';

const next = () => {
  fs.appendFile(logFile, 'Ligne 1\n', (err) => {
    if (err) {
      return console.log(err.message);
    }
    fs.appendFile(logFile, 'Ligne 2\n', (err) => {
      if (err) {
        return console.log(err.message);
      }
      fs.appendFile(logFile, 'Ligne 3\n', (err) => {
        if (err) {
          return console.log(err.message);
        }
        fs.appendFile(logFile, 'Ligne 4\n', (err) => {
          if (err) {
            return console.log(err.message);
          }
          fs.appendFile(logFile, 'Ligne 5\n', (err) => {
            if (err) {
              return console.log(err.message);
            }
            console.log('Logs done');
          });
        });
      });
    });
  });
};

fs.stat(logDir, (err, stats) => {
  if (err && err.code === 'ENOENT') {
    return fs.mkdir(logDir, (err) => {
      next();
    });
  }
  next();
})

