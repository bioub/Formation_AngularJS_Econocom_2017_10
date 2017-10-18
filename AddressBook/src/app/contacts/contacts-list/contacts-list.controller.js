class ContactListCtrl {
    constructor(contactService) {
        this.contacts = contactService.query();
    }
}

ContactListCtrl.$inject = ['contactService'];

export default ContactListCtrl;
