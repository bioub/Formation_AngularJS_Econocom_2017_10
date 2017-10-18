// Exercice
// 1/ Créer un controller, l'enregistrer dans contacts.module
// 2/ Associer ce controller à l'URL (dans app.module)
// 3/ Dans la fonction constructeur faire la requete AJAX avec $http
// vers http://jsonplaceholder.typicode.com/users/3 (où 3 est à remplacer l'id)
// Pour le requête on peut demander au controller $state
// puis $state.params.contactId
// 4/ Afficher les infos détaillées du contacts dans le template

(function() {
  'use strict';

  var ContactShowCtrl = function($state, contactService) {
    this.contact = contactService.get({userId: $state.params.contactId});
  };

  ContactShowCtrl.$inject = ['$state', 'contactService'];

  var module = angular.module('contacts.module');
  module.controller('ContactShowCtrl', ContactShowCtrl);

}());
