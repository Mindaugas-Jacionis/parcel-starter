let contacts = [];

const getContacts = () => contacts;
const addContact = contact => {
  contacts = [...contacts, { ...contact, id: new Date().getTime() }];
};

const deleteContact = id => {
  contacts = contacts.filter(contact => contact.id == id);
};

module.exports = {
  getContacts,
  addContact,
  deleteContact,
};
