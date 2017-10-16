setTimeout(function() {
  console.log('Hello dans 1 seconde');
}, 1000);

const nbs = [2, 4, 5];

const forEach = function(array, cb) {
  for (var i=0; i<array.length; i++) {
    setTimeout(cb, i * 100, array[i], i, array);
  }
};

forEach(nbs, function (nb, i) {
  console.log(nb);
});

console.log('end');
