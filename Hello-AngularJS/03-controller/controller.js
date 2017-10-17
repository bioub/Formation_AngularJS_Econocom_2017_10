(function() {
  'use strict';

  var PrenomCtrl = function($scope) {
    $scope.prenoms = ['Toto', 'Titi'];

    $scope.ajouter = function(prenom) {
      $scope.prenoms.push(prenom);
      $scope.prenom = '';
    };
  };

  var module = angular.module('app', []);
  module.controller('PrenomCtrl', PrenomCtrl);

}());


