import {CONTACTS, ContactsBook} from "./";

const myContactsBook = new ContactsBook();

CONTACTS.forEach(contact => myContactsBook.addContact(contact));

myContactsBook.printCurrentMetrics();

myContactsBook.addContact({name: "Zed", phone: "000-000-0000"});
myContactsBook.addContact({name: "Bonny", phone: "111-111-1111"});

myContactsBook.printCurrentMetrics();
