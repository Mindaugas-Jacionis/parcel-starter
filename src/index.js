const contacts = require('./contacts');
require('./index.scss');

let searchValue = '';

function render() {
  const addressBook = contacts.getContacts();
  const app = document.getElementById('app');
  app.innerHTML = null;

  addressBook
    .filter(contact => {
      const normalizedName = contact.name.toLowerCase();
      const normalizedSearch = searchValue.toLowerCase();

      const hasName = normalizedName.includes(normalizedSearch);
      const hasPhone = contact.phone.includes(normalizedSearch);

      return hasName || hasPhone;
    })
    .forEach(contact => {
      const container = document.createElement('div');
      const name = document.createElement(contact.editing ? 'input' : 'span');
      const phone = document.createElement(contact.editing ? 'input' : 'span');
      const deleteButton = document.createElement('button');
      const editButton = document.createElement('button');

      name[contact.editing ? 'value' : 'textContent'] = contact.name;
      phone[contact.editing ? 'value' : 'textContent'] = contact.phone;
      deleteButton.textContent = '❌';
      deleteButton.type = 'button';
      editButton.textContent = contact.editing ? '✅' : '✏️';
      editButton.type = 'button';

      deleteButton.addEventListener('click', () => {
        contacts.deleteContact(contact.id);
        render();
      });

      phone.addEventListener('input', e => {
        contacts.updateContact(contact.id, { phone: e.target.value });
      });

      name.addEventListener('input', e => {
        contacts.updateContact(contact.id, { name: e.target.value });
      });

      editButton.addEventListener('click', () => {
        contacts.updateContact(contact.id, { editing: !contact.editing });
        render();
      });

      container.appendChild(name);
      container.appendChild(phone);
      container.appendChild(deleteButton);
      container.appendChild(editButton);
      app.appendChild(container);
    });
}

function addFormListener(e) {
  e.preventDefault();

  const name = document.querySelector('#add-form input[name="name"]').value;
  const phone = document.querySelector('#add-form input[name="phone"]').value;

  contacts.addContact({ name, phone });
  render();
}

function searchFormListener(e) {
  searchValue = e.target.value;
  render();
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('add-form');
  const search = document.getElementById('search-form');

  form.addEventListener('submit', addFormListener);
  search.addEventListener('input', searchFormListener);
  render();
});
