export class FilterList {
    constructor(data) {
        this.ingredients = data.ingredients;
        this.appliance = data.appliance;
        this.utensils = data.utensils;
    }

    // get ingredients() {
    //     return this.ingredients;
    // }

    // get appliance() {
    //     return this.appliance;
    // }

    // get utensils() {
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
}
