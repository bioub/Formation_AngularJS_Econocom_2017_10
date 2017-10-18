(function() {
  'use strict';

  var module = angular.module('app', [
    'ui.router',
    'angular-loading-bar',
    'contacts.module',
  ]);

  module.config(['$stateProvider', function($stateProvider) {
    $stateProvider.state({
      name: 'contacts',
      url: '/contacts',
      controller: 'ContactListCtrl',
      controllerAs: '$ctrl',
      templateUrl: './app/contacts/contacts-list/contacts-list.template.html',
      /*
      // affichera la page quand la requête aura terminée
      resolve: {
        contacts: function($http) {
          return $http.get('http://jsonplaceholder.typicode.com/users')
            .then(function(res) {
              return res.data;
            });
        }
      }
      */
    });

    $stateProvider.state({
      name: 'contacts.add',
      url: '/add',
      controller: 'ContactAddCtrl',
      controllerAs: '$ctrl',
      templateUrl: './app/contacts/contacts-add/contacts-add.template.html',
    });

    $stateProvider.state({
      name: 'contacts.show',
      url: '/{contactId}',
      controller: 'ContactShowCtrl',
      controllerAs: '$ctrl',
      templateUrl: './app/contacts/contacts-show/contacts-show.template.html',
    });
  }]);
}());
