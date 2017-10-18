import angular from "angular";
import uiRouter from "@uirouter/angularjs";
import angularLoadingBar from "angular-loading-bar";

import contactsModule from "./contacts/contacts.module";

import contactAddTemplate from './contacts/contacts-add/contacts-add.template.html';
import contactListTemplate from './contacts/contacts-list/contacts-list.template.html';
import contactShowTemplate from './contacts/contacts-show/contacts-show.template.html';

var module = angular.module('app', [
  uiRouter,
  angularLoadingBar,
  contactsModule,
]);

module.config(['$stateProvider', function($stateProvider) {
  $stateProvider.state({
    name: 'contacts',
    url: '/contacts',
    controller: 'ContactListCtrl',
    controllerAs: '$ctrl',
    template: contactListTemplate,
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
    template: contactAddTemplate,
  });

  $stateProvider.state({
    name: 'contacts.show',
    url: '/{contactId}',
    controller: 'ContactShowCtrl',
    controllerAs: '$ctrl',
    template: contactShowTemplate,
  });
}]);
