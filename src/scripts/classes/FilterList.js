/*
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

            case 'utensils':
                const utensilsListItem = document.createElement('li');
                utensilsListItem.textContent = `${this.utensils}`
                document.querySelector('.utensils-list').appendChild(utensilsListItem);
        
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
