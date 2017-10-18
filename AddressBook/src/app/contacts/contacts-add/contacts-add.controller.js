
class ContactAddCtrl {
    constructor(contactService) {
        this.contactService = contactService;
    }
    ajouter(contact) {
        this.contactService.save(contact, function() {
            console.log('OK !!!');
        });
    }
}


ContactAddCtrl.$inject = ['contactService'];

export default ContactAddCtrl;
