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

    createFilterList(type) {
        switch (type) {
            case 'ingredients': {
                const ingredientsListItem = document.createElement('li');
                this.ingredients.forEach((element) => {
                    ingredientsListItem.textContent = element.ingredient;
                });
                // Replaced with forEach
                // for (const iterator of this.ingredients) {
                //     ingredientsListItem.textContent = iterator.ingredient;
                // }
                document
                    .querySelector('.ingredients__list')
                    .appendChild(ingredientsListItem);
                break;
            }

            case 'appliance': {
                const applianceListItem = document.createElement('li');
                applianceListItem.textContent = `${this.appliance}`;
                document
                    .querySelector('.appliance__list')
                    .appendChild(applianceListItem);
                break;
            }

            case 'utensils': {
                const utensilsListItem = document.createElement('li');
                utensilsListItem.textContent = `${this.utensils}`;
                document
                    .querySelector('.utensils__list')
                    .appendChild(utensilsListItem);
                break;
            }

            default:
                break;
        }
    }

    createFilterListTest(ingredientList) {
        const ingredientsListItemTest = document.createElement('li');
        ingredientsListItemTest.textContent = ingredientList;
        document
            .querySelector('.ingredients__list')
            .appendChild(ingredientsListItemTest);
    }

    sortFilterList(type) {
        switch (type) {
            case 'ingredients': {
                // Sort code here
                break;
            }

            case 'appliance': {
                // Sort code here
                break;
            }

            case 'utensils': {
                // Sort code here
                break;
            }

            default:
                break;
        }
    }

    // Get ingredient list (test)
    getListTest(recipes) {
        let testList = [];
        let completeTestList = [];
        // Get all ingredients objects from recipes
        recipes.forEach((element) => {
            testList.push(element.ingredients);
        });
        console.log(testList);
        // Get all individual ingredients from "ingredients"objects
        testList.forEach((element) => {
            element.forEach((innerElement) => {
                // Prevent duplication of ingredients
                if (!completeTestList.includes(innerElement.ingredient)) {
                    completeTestList.push(innerElement.ingredient);
                }
            });
        });
        console.log(completeTestList);
        return completeTestList;
    }

    // Sort ingredient list (test)
    sortListTest(list) {
        list.sort((a, b) => {
            return a.localeCompare(b);
        });
        console.log(list);
    }

    // Display ingredient list (test)
    displayListTest(list) {
        list.forEach((element) => {
            let recipeModelTest = new FilterList(element);
            recipeModelTest.createFilterListTest(element);
        });
    }
}
