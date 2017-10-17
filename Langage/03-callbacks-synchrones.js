const nbs = [2, 4, 8];

// Array.prototype.forEach (ES5.1) IE9+
nbs.forEach(function (nb, i) {
  console.log(nb);
});

const forEach = function(array, cb) {
  for (var i=0; i<array.length; i++) {
    cb(array[i], i, array);
  }
};

forEach(nbs, function (nb, i) {
  console.log(nb);
});

const setTimeoutSync = function(cb, delay) {
  const debut = Date.now();

  while(Date.now() < debut + delay) {

  }

  cb();
};

setTimeoutSync(function() {
  console.log('Hello dans 1 seconde');
}, 1000);

if (!Array.prototype.forEach) {
  Array.prototype.forEach = function(cb) {
    for (var i=0; i<this.length; i++) {
      cb(this[i], i, this);
    }
  };
}


console.log('end');
