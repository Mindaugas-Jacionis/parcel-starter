const createDomElement = (tag, attributes) => {
  const elementTag = document.createElement(tag);

  Object.entries(attributes).forEach(attr => {
    const [attrKey, attrValue] = attr;
    elementTag[attrKey] = attrValue;
  });

  return elementTag;
};

const addToDom = (target, element) => {
  if (target && element) {
    if (typeof target === "string") {
      document.querySelector(target).appendChild(element);
    } else {
      target.appendChild(element);
    }
  }
};

module.exports = {
  createDomElement,
  addToDom
};
