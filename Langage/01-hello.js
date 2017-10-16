
// const ES6
/**
 * Affiche Bonjour suivi du prénom en entrée
 * @param {string} prenom Le prénom à saluer
 * @returns {string} Le message de salutation
 */
const hello = function(prenom) {
  prenom = prenom || 'Inconnu';
  return 'Bonjour ' + prenom;
};

console.log(hello('Toto'));
