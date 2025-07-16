let contacts = [
    new Contact('Peter', 'Pan', '01575676872'),
    new Friend('Jack', 'Paulsen'),
]

function addContact(firstName, lastName, phone) {
    let myContact = new Contact(firstName, lastName, phone);
    contacts.push(myContact);
}

addContact('Manuel', 'Möller', '01575676872');