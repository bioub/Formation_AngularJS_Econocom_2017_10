(function() {
  'use strict';

  var ContactListCtrl = function(contactService) {
    this.contacts = contactService.query();
  };

  ContactListCtrl.$inject = ['contactService'];

  var module = angular.module('contacts.module');
  module.controller('ContactListCtrl', ContactListCtrl);

}());
