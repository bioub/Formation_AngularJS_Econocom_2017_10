

const externe = function(msg) {
  // Portée sauvegardée : closure (fermeture)
  const interne = function() {
    console.log(msg);
  };

  return interne;
};

console.log(typeof externe); // 'function'
console.log(typeof interne); // 'undefined'

const hello = externe('Hello');
const bonjour = externe('Bonjour');
console.log(typeof hello); // 'function'
hello(); // Hello
bonjour(); // Bonjour

// sans closure
for (var i=0; i<3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}

// avec closure
for (var i=0; i<3; i++) {
  setTimeout(externe(i), 1000);
}
