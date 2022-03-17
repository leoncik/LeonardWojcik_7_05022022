// Empty an HTML element
const emptyHtmlElement = (element) =>
    (document.querySelector(element).innerHTML = '');

// Create an Html element
const createHtmlElement = (type, className, content, attributes = []) => {
    const element = document.createElement(type);
    element.className = className;
    element.textContent = content;
    attributes.map((attribute) => {
        element.setAttribute(attribute.key, attribute.value);
    });
    return element;
};

// Sort an array alphabetically
const sortAlphabetically = (arr) => arr.sort((a, b) => a - b);

// Regex to manage what is displayed inside recipes, appliance and utensils lists
const filterRegex = /\s[0123456789]|\sou\s|[()]/;

export { emptyHtmlElement, createHtmlElement, sortAlphabetically, filterRegex };
