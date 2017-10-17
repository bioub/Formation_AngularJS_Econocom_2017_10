(function() {
  'use strict';

  var TodoCtrl = function() {
    this.todos = [{
      value: 'Acheter du pain',
      done: false,
    }, {
      value: 'Aller courir',
      done: true,
    }];
  };

  TodoCtrl.prototype.ajouter = function(todo) {
    var copy = angular.copy(todo);
    this.todos.push(copy);
  };

  TodoCtrl.prototype.supprimer = function(i) {
    this.todos.splice(i, 1);
  };

  TodoCtrl.prototype.toggleAll = function(doneAll) {
    this.todos.forEach(function(t) {
      t.done = doneAll;
    });
  };

  var module = angular.module('app', []);
  module.controller('TodoCtrl', TodoCtrl);
}());
