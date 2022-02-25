// Empty an HTML element
export const emptyHtmlElement = (element) => {
    document.querySelector(element).innerHTML = '';
};

export const sortAlphabetically = (arr, list) => {
    // 1) Filter array
    arr.sort((a, b) => {
        return a - b;
    });
    // 2) Empty previous results
    emptyHtmlElement(list);
    // 3) Display new results
    // arr.array.forEach(element => {
    //     let recipeModel = new FilterList(element);
    //     recipeModel.createFilterList('ingredients');
    // });
};

// TODO : add "attributes" argument
export const createHtmlElement = (type, className, content) => {
    const element = document.createElement(type);
    element.classList.add(`${className}`);
    element.textContent = content;
    return element;
};
