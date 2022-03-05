// Empty an HTML element
export const emptyHtmlElement = (element) =>
    (document.querySelector(element).innerHTML = '');

// Sort an array alphabetically
export const sortAlphabetically = (arr) => arr.sort((a, b) => a - b);

// TODO : add "attributes" argument
export const createHtmlElement = (
    type,
    className,
    content,
    attributes = []
) => {
    const element = document.createElement(type);
    element.className = className;
    element.textContent = content;
    attributes.map((attribute) => {
        element.setAttribute(attribute.key, attribute.value);
    });
    return element;
};
