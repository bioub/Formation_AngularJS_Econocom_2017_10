(function() {
  'use strict';

  var module = angular.module('contacts.module');

  /*
  var ContactService = function() {

  };

  module.service('contactService', ContactService);
  */

  /*
  var contactServiceFactory = function($http) {
    return {
      getList: function() {
        return $http.get('http://jsonplaceholder.typicode.com/users');
      },
      getById: function(id) {
        return $http.get('http://jsonplaceholder.typicode.com/users/' + id);
      },
    };
  };

  contactServiceFactory.$inject = ['$http'];
  */

  var contactServiceFactory = function($resource) {
    return $resource('http://jsonplaceholder.typicode.com/users/:userId', {userId:'@id'});
  };

  contactServiceFactory.$inject = ['$resource'];

  module.factory('contactService', contactServiceFactory);


}());
