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

console.log('end');
