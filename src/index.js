const contacts = require('./contacts');

function render() {
  const addressBook = contacts.getContacts();
  const app = document.getElementById('app');

  addressBook.forEach(contact => {
    const container = document.createElement('div');
    const name = document.createElement('span');
    const phone = document.createElement('span');

    name.textContent = contact.name;
    phone.textContent = contact.phone;

    container.appendChild(name);
    container.appendChild(phone);
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

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('add-form');

  form.addEventListener('submit', addFormListener);
  render();
});
