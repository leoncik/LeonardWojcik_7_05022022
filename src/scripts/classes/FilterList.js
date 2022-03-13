export class FilterList {
    constructor(data) {
        this.ingredients = data.ingredients;
        this.appliance = data.appliance;
        this.utensils = data.utensils;
        this.lists = ['ingredients', 'appliance', 'utensils'];
    }

    // Get filters lists and avoids duplicates
    getFilterLists(recipes, type) {
        switch (type) {
            case 'ingredients': {
                let ingredientsList = [];
                let innerIngredientsList = [];
                // Get all ingredients objects from recipes
                recipes.forEach((element) => {
                    ingredientsList = [...ingredientsList, element.ingredients];
                });
                // Get all individual ingredients from "ingredients"objects
                ingredientsList.forEach((element) => {
                    element.forEach((innerElement) => {
                        // Prevent duplication of ingredients and use regex to be specific
                        // todo : add " ou " to regex.
                        innerElement.ingredient =
                            innerElement.ingredient.toLowerCase();
                        if (
                            !innerIngredientsList.includes(
                                innerElement.ingredient
                            )
                        ) {
                            innerIngredientsList = [
                                ...innerIngredientsList,
                                innerElement.ingredient
                                    .split(/[()0123456789]/)
                                    .shift(),
                            ];
                        }
                    });
                });
                return innerIngredientsList;
            }

            case 'appliance': {
                let applianceList = [];
                recipes.forEach((element) => {
                    if (!applianceList.includes(element.appliance)) {
                        applianceList = [...applianceList, element.appliance];
                    }
                });
                return applianceList;
            }

            case 'utensils': {
                let utensilsList = [];
                let innerUtensilsList = [];
                // Get all utensils arrays from recipes
                recipes.forEach((element) => {
                    utensilsList = [...utensilsList, element.utensils];
                });
                // Get all individual utensils from utensilsList
                utensilsList.forEach((element) => {
                    element.forEach((innerElement) => {
                        // Prevent duplication of ingredients and use regex to be specific
                        innerElement = innerElement.toLowerCase();
                        if (!innerUtensilsList.includes(innerElement)) {
                            innerUtensilsList = [
                                ...innerUtensilsList,
                                innerElement.split(/[()]/).shift(),
                            ];
                        }
                    });
                });
                return innerUtensilsList;
            }

            default:
                break;
        }
    }

    // Sort list
    sortList(list) {
        list.sort((a, b) => a.localeCompare(b));
    }

    createFilterList(list, type) {
        const listItem = document.createElement('li');
        listItem.textContent = list;
        listItem.classList.add(`${type}__item`);
        document.querySelector(`.${type}__list`).appendChild(listItem);
    }

    // Display list
    displayList(list, type) {
        list.forEach((element) => {
            this.createFilterList(element, type);
        });
    }
}
