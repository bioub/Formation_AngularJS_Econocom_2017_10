(function() {
  'use strict';

  var ContactAddCtrl = function(contactService) {
    this.contactService = contactService;
  };

  ContactAddCtrl.prototype.ajouter = function(contact) {
    this.contactService.save(contact, function() {
      console.log('OK');
    })
  };

  ContactAddCtrl.$inject = ['contactService'];

  var module = angular.module('contacts.module');
  module.controller('ContactAddCtrl', ContactAddCtrl);

}());
