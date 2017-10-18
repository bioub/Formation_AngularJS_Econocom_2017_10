(function() {
  'use strict';

  var ContactListCtrl = function($http) {
    var that = this;
    $http.get('http://jsonplaceholder.typicode.com/users')
      .then(function(res) {
        that.contacts = res.data;
      });
  };

  ContactListCtrl.$inject = ['$http'];

  var module = angular.module('contacts.module');
  module.controller('ContactListCtrl', ContactListCtrl);

}());
