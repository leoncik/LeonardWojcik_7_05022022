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

// Regex to manage what is displayed inside recipes, appliance and utensils lists
const filterRegex = /\s[0123456789]|\sou\s|[()]/;

export { emptyHtmlElement, createHtmlElement, filterRegex };
