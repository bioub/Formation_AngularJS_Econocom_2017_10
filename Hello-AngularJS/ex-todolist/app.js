(function() {
  'use strict';

  var TodoCtrl = function($scope) {
    $scope.todos = [{
      value: 'Acheter du pain',
      done: false,
    }, {
      value: 'Aller courir',
      done: true,
    }];

    $scope.ajouter = function(todo) {
      var copy = angular.copy(todo);
      $scope.todos.push(copy);
    };

    $scope.supprimer = function(i) {
      $scope.todos.splice(i, 1);
    };

    $scope.toggleAll = function() {
      $scope.todos.forEach(function(t) {
        t.done = $scope.doneAll;
      });
    };
  };

  var module = angular.module('app', []);
  module.controller('TodoCtrl', TodoCtrl);
}());
