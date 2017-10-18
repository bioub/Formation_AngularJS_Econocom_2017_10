class ContactShowCtrl {
    constructor($state, contactService) {
        this.contact = contactService.get({ userId: $state.params.contactId });
    }
}

ContactShowCtrl.$inject = ['$state', 'contactService'];

export default ContactShowCtrl;
