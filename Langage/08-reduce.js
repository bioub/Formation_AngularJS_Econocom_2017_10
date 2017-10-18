const nbs = [2, 3, 5, 4, 2, 1];

const sum = nbs.reduce(function(acc, nb) {
  return acc + nb;
}, 0);

// 0 + 2 = 2
// 2 + 3 = 5
// 5 + 5 = 10
// 10 + 4 = 14
// 14 + 2 = 16
// 16 + 1 = 16

console.log('Sum : ' + sum);

const max = nbs.reduce(function(acc, nb) {
  return (nb > acc) ? nb : acc;
}, -Infinity);

console.log('Max : ' + max);


