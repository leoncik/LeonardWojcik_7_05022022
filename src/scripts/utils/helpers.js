// Empty an HTML element
const emptyHtmlElement = (element) => {
    document.querySelector(element).innerHTML = ' ';
};

export const sortAlphabetically = (data, list) => {
    // 1) Filter data
    data.sort((a, b) => {
        return a - b;
    });
    // 2) Empty previous results
    emptyHtmlElement(list);
    // 3) Display new results
    // data.array.forEach(element => {
    //     let recipeModel = new FilterList(element);
    //     recipeModel.createFilterList('ingredients');
    // });
};
