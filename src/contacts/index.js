let contacts = [];

const getContacts = () => [...contacts];
const addContact = contact => {
  contacts = [...contacts, { ...contact, id: new Date().getTime(), editing: false }];
};

const deleteContact = id => {
  contacts = contacts.filter(contact => contact.id != id);
};

const updateContact = (id, newInfo) => {
  contacts = contacts.map(contact => {
    if (contact.id == id) {
      return { ...contact, ...newInfo };
    }

    return contact;
  });
};

module.exports = {
  getContacts,
  addContact,
  deleteContact,
  updateContact,
};
