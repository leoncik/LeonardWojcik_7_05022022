/*
export class FilterList {
    constructor(data) {
        this.ingredients = data.ingredients;
        this.appliance = data.appliance;
        this.ustensils = data.ustensils;
    }

    // get ingredients() {
    //     return this.ingredients;
    // }

    // get appliance() {
    //     return this.appliance;
    // }

    // get ustensils() {
    //     return this.ustensils;
    // }

    createFilterList(type) {

        switch (type) {
            case 'ingredients':
                const ingredientsListItem = document.createElement('li');
                for (const iterator of this.ingredients) {
                    ingredientsListItem.textContent = iterator.ingredient;                    
                }
                document.querySelector('.ingredients-list').appendChild(ingredientsListItem);
                break;

            case 'appliance':
                const applianceListItem = document.createElement('li');
                applianceListItem.textContent = `${this.appliance}`
                document.querySelector('.appliance-list').appendChild(applianceListItem);
                break;

            case 'ustensils':
                const ustensilsListItem = document.createElement('li');
                ustensilsListItem.textContent = `${this.ustensils}`
                document.querySelector('.ustensils-list').appendChild(ustensilsListItem);
        
            default:
                break;
        }

    // Test : generic creation of filter list
    // for (const iterator of this.type) {
    //     console.log(iterator.type);
    //     const listItem = document.createElement('li');
    //     listItem.textContent = iterator.type;
    //     document.querySelector(`.${type}-list`).appendChild(listItem);
    // }

    }
} */
