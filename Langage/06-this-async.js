const contactClosure = {
  prenom: 'Romain',
  helloAsync: function() {
    var _this = this;
    setTimeout(function() {
      console.log('Dans 1 sec : Bonjour ' + _this.prenom);
    }, 1000);
  },
};

contactClosure.helloAsync();

function hello(a, b, c) {
  console.log('hello global : Bonjour ' + this.prenom);
}

hello();
hello.call(contactClosure, 1, 2, 3);
hello.apply(contactClosure, [1, 2, 3]);

function bind(_this, cb) {
  return function() {
    cb.call(_this);
  };
}

const contactBind = {
  prenom: 'Romain',
  hello: function() {
    console.log('Dans 1 sec : Bonjour ' + this.prenom);
  },
  helloAsync: function() {
    setTimeout(bind(this, this.hello), 1000);
  },
  helloAsyncES5: function() {
    setTimeout(this.hello.bind(this), 1000);
  },
};

contactBind.helloAsync();

const contactArrow = {
  prenom: 'Romain',
  helloAsync: function() {
    setTimeout(() => {
      console.log('Dans 1 sec : Bonjour ' + this.prenom);
    }, 1000);
  },
};

contactArrow.helloAsync();
