import angular from "angular";
import ngResource from "angular-resource";

import ContactAddCtrl from "./contacts-add/contacts-add.controller";
import ContactListCtrl from "./contacts-list/contacts-list.controller";
import ContactShowCtrl from "./contacts-show/contacts-show.controller";
import contactServiceFactory from "./contacts.service";

var module = angular.module('contacts.module', [
  ngResource
]);

module.controller('ContactAddCtrl', ContactAddCtrl);
module.controller('ContactListCtrl', ContactListCtrl);
module.controller('ContactShowCtrl', ContactShowCtrl);
module.factory('contactService', contactServiceFactory);

export default module.name;
