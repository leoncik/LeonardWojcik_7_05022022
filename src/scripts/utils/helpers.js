// Empty an HTML element
export const emptyHtmlElement = (element) =>
    (document.querySelector(element).innerHTML = '');

// Sort an array alphabetically
export const sortAlphabetically = (arr) => arr.sort((a, b) => a - b);

// TODO : add "attributes" argument
export const createHtmlElement = (
    type,
    //attributes = [],
    className,
    content
) => {
    const element = document.createElement(type);
    element.classList.add(`${className}`);
    element.textContent = content;
    // attributes.map(attribute => {
    //     element.setAttribute(attribute.name, attribute.value)
    // })
    return element;
};
