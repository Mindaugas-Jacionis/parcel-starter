require("reset-css");
// require("nes.css/scss/");
const { createDomElement, addToDom } = require("./utils");
const { getAddressbook, addNewEntry, removeEntry } = require("./addressbook-manager");

function render() {
  const app = document.getElementById("app");
  const addressbook = getAddressbook();

  app.innerHTML = null;

  addressbook.forEach((person, index) => {
    const entryElement = createDomElement("div", {
      className: "addressbook-entry"
    });
    const name = createDomElement("p", { textContent: person.name });
    const phone = createDomElement("p", { textContent: person.phone });
    const deleteButton = createDomElement("button", {
      type: "button",
      textContent: "Delete 🗑️",
      onclick: () => {
        removeEntry(index);
        render();
      }
    });

    addToDom(app, entryElement);
    addToDom(entryElement, name);
    addToDom(entryElement, phone);
    addToDom(entryElement, deleteButton);
  });
}

function submitNewAddress(event) {
  event.preventDefault();

  const allInputs = event.target.querySelectorAll("input");
  const newEntryData = [...allInputs].reduce((result, input) => {
    return { ...result, [input.name]: input.value };
  }, {});

  addNewEntry(newEntryData);
  render();
}

document.getElementById("new-address").addEventListener("submit", submitNewAddress);

render();
