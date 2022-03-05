export class FilterList {
    constructor(data) {
        this.ingredients = data.ingredients;
        this.appliance = data.appliance;
        this.utensils = data.utensils;
    }

    // get getIngredients() {
    //     return this.ingredients;
    // }

    // get getAppliance() {
    //     return this.appliance;
    // }

    // get getUtensils() {
    //     return this.utensils;
    // }

    // Get filters lists and avoids duplicates
    getFilterLists(recipes, type) {
        switch (type) {
            case 'ingredients': {
                let ingredientsList = [];
                let innerIngredientsList = [];
                // Get all ingredients objects from recipes
                recipes.forEach((element) => {
                    ingredientsList = [...ingredientsList, element.ingredients];
                    // ingredientsList.push(element.ingredients);
                });
                // Get all individual ingredients from "ingredients"objects
                ingredientsList.forEach((element) => {
                    element.forEach((innerElement) => {
                        // Prevent duplication of ingredients
                        if (
                            !innerIngredientsList.includes(
                                innerElement.ingredient
                            )
                        ) {
                            innerIngredientsList = [
                                ...innerIngredientsList,
                                innerElement.ingredient,
                            ];
                            // innerIngredientsList.push(innerElement.ingredient);
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
                        // applianceList.push(element.appliance);
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
                    // utensilsList.push(element.utensils);
                });
                // Get all individual utensils from utensilsList
                utensilsList.forEach((element) => {
                    element.forEach((innerElement) => {
                        // Prevent duplication of ingredients
                        if (!innerUtensilsList.includes(innerElement)) {
                            innerUtensilsList = [
                                ...innerUtensilsList,
                                innerElement,
                            ];
                            // innerUtensilsList.push(innerElement);
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
        console.log(list);
    }

    createFilterList(list, type) {
        const listItem = document.createElement('li');
        listItem.textContent = list;
        document.querySelector(`.${type}__list`).appendChild(listItem);
    }

    // Display list
    displayList(list, type) {
        list.forEach((element) => {
            this.createFilterList(element, type);
        });
    }
}
