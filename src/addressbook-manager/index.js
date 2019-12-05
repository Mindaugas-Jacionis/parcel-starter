let addressBook = [];

const getAddressbook = () => [...addressBook];

const addNewEntry = entry => {
  addressBook = [...addressBook, entry];
};

const removeEntry = index => {
  addressBook = addressBook.filter((entry, entryIndex) => index !== entryIndex);
};

module.exports = {
  getAddressbook,
  addNewEntry,
  removeEntry
};
