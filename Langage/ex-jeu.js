const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
}

const entierAlea = getRandomIntInclusive(0, 100);
const essais = [];

const jouer = function() {
  if (essais.length) {
    console.log('Vous avez déjà joué : ' + essais.join(', '));
  }
  rl.question('Saisir un entier entre 0 et 100 ', (answer) => {

    const entierSaisi = parseInt(answer);

    if (isNaN(entierSaisi)) {
      console.log('Il faut saisir un nombre');
      return jouer();
    }

    essais.push(entierSaisi);

    if (entierSaisi < entierAlea) {
      console.log('Trop petit');
      return jouer();
    }

    if (entierSaisi > entierAlea) {
      console.log('Trop grand');
      return jouer();
    }

    // finir la partie
    console.log('Gagné !');
    rl.close();
  });
};

jouer();
