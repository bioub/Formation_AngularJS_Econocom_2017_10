// 1 - On va manipuler beaucoup d'objet existants
console.log(typeof Math); // object (du langage)
console.log(typeof console); // object (dans Node et Browser)
console.log(typeof process); // object (dans Node)
console.log(typeof document); // object (dans Browser)

// 2 - Les objets JS sont extensibles
console.log(Math.sum); // undefined

Math.sum = function(a, b) {
  return a + b;
};

console.log(Math.sum); // function
console.log(Math.sum(1, 2)); // 3
console.log(Math.sum('1', '2')); // '12'

Math.sum = function(a, b) {
  return Number(a) + Number(b);
};
console.log(Math.sum('1', '2')); // 3

delete Math.sum;
console.log(Math.sum); // undefined

// 3 - Object Literal (besoins ponctuels)
const coords = {
  x: 10,
  y: 20,
};
console.log(coords.x); // 10
console.log(coords.y); // 20

// 4 - Fonction constructeur (besoins récurrents)
const Contact = function(prenom) {
  this.prenom = prenom;
};

Contact.prototype.hello = function() {
  return `Bonjour je m'appelle ${this.prenom}`;
};

const romain = new Contact('Romain');
console.log(typeof romain); // object
console.log(romain.hello());
