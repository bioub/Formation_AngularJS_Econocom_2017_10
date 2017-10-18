(function() {
  'use strict';

  var PrenomCtrl = function($scope) {
    $scope.prenoms = ['Toto', 'Titi'];

    $scope.ajouter = function(prenom) {
      $scope.prenoms.push(prenom);
      $scope.prenom = '';
    };
  };

  // Annoter (donner une string qui correspondra à la variable peut importe son nom)
  // option 1
  //PrenomCtrl.$inject = ['$scope'];

  var module = angular.module('app', []);
  // module.controller('PrenomCtrl', PrenomCtrl);
  // option 2
  module.controller('PrenomCtrl', ['$scope', PrenomCtrl]);



}());


