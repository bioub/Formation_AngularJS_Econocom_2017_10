// REST params
const sum = (...nbs) => nbs.reduce((acc, nb) => acc + nb);
console.log(sum(2, 3, 4)); // 9

// Permet de recréer arguments dans les fonctions fléchées
[2, 3, 4].forEach((...args) => {
  console.log(args);
});

// SPREAD Operator
const nbs = [2, 3, 4];
console.log(sum(nbs[0], nbs[1], nbs[2])); // 9
console.log(sum(...nbs)); // 9

const hello = function(prenom) {
  return `Bonjour ${prenom} je m'appelle ${this.prenom}`;
};
const contact = {prenom: 'Romain'};
console.log(hello.call(contact, 'Eric')); // Bonjour Eric je m'appelle Romain
console.log(hello.apply(contact, ['Eric'])); // Bonjour Eric je m'appelle Romain
console.log(hello.call(contact, ...['Eric'])); // Bonjour Eric je m'appelle Romain

const autresNbs = [1, ...nbs, 5, 6];
const copyES3 = autresNbs.slice();
const copyES6 = [...autresNbs];
// deepCopy, cloneDeep => lodash

// En ES next (peut-être en ES9 ou 10...), on peut aussi appliquer SPREAD à des objets
const contactComplet = {...contact, nom: 'Bohdanowicz'};
console.log(JSON.stringify(contactComplet)); // {"prenom":"Romain","nom":"Bohdanowicz"}

/*
const Contact = function(prenom) {
  this.prenom = prenom;
}

Contact.prototype.hello = function(prenom) {
  return `Bonjour ${prenom} je m'appelle ${this.prenom}`;
};
*/

class Contact {
    constructor(prenom) {
        this.prenom = prenom;
    }
    hello(prenom) {
        return `Bonjour ${prenom} je m'appelle ${this.prenom}`;
    }
}

const romain = new Contact('Romain');
console.log(romain.hello('Eric')); // Bonjour Eric je m'appelle Romain
console.log(typeof Contact); // function
console.log(typeof Contact.prototype.hello); // function

/*
const prenom = contactComplet.prenom;
const nom = contactComplet.nom;
*/
// Destructurer
const {prenom, nom = 'Doe'} = contactComplet;
const [un, deux = 2] = autresNbs;
