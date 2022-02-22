export class Recipe {
    constructor(data) {
        this.name = data.name;
        this.ingredients = data.ingredients;
        this.appliance = data.appliance;
        this.utensils = data.utensils;
        this.description = data.description;
        this.time = data.time;
    }

    createRecipeCard() {
        // Version without template string

        // Card structure
        /*
        <article class="recipe">
            <div class="recipe__image-preview">
                <a href="#">
                    <img src="./assets/preview-recipe.jpg" alt="preview recette">
                 </a>
             </div>
            <div class="recipe__description">
                <div class="recipe__main-info">
                    <h2 class="recipe__name">Titre recette</h2>
                    <p class="recipe__duration">Xmin</p>
                </div>

                <div class="recipe__secondary-info">
                    <ul class="recipe__ingredients">
                        <li><span class="recipe__ingredient-name">Ingrédient 1:</span> <span class="recipe__ingredient-quantity">quantité1</span></li>
                        <li><span class="recipe__ingredient-name">Ingrédient 2:</span> <span class="recipe__ingredient-quantity">quantité2</span></li>
                        <li><span class="recipe__ingredient-name">Ingrédient 3:</span> <span class="recipe__ingredient-quantity">quantité3</span></li>
                    </ul>
                    <p class="recipe__steps">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio provident assumenda suscipit corrupti odit ullam.</p>
                </div>
            </div>
        </article> */

        const recipeCard = document.createElement('article');

        // PREVIEW IMAGE
        // TODO : improve alt text.
        // Image container
        const imageContainer = document.createElement('div');
        imageContainer.classList.add('recipe__image-preview');
        recipeCard.appendChild(imageContainer);
        // Recipe link
        const recipeLink = document.createElement('a');
        recipeLink.setAttribute('href', '#');
        imageContainer.appendChild(recipeLink);
        // Recipe image
        const recipeImage = document.createElement('img');
        recipeImage.setAttribute('src', 'assets/preview-recipe.jpg');
        recipeImage.setAttribute('alt', `Image de la recette`);
        recipeLink.appendChild(recipeImage);

        // RECIPE DESCRIPTION
        // Description container
        const descriptionContainer = document.createElement('div');
        descriptionContainer.classList.add('recipe__description');
        recipeCard.appendChild(descriptionContainer);

        // Main info
        const mainInfo = document.createElement('div');
        mainInfo.classList.add('recipe__main-info');
        descriptionContainer.appendChild(mainInfo);
        // Recipe name
        const recipeName = document.createElement('h2');
        recipeName.classList.add('recipe__name');
        recipeName.textContent = this.name;
        mainInfo.appendChild(recipeName);
        // Recipe duration
        const recipeDuration = document.createElement('p');
        recipeDuration.classList.add('recipe__duration');
        recipeDuration.textContent = `${this.time} min`;
        mainInfo.appendChild(recipeDuration);

        // Secondary info
        const secondaryInfo = document.createElement('div');
        secondaryInfo.classList.add('recipe__secondary-info');
        descriptionContainer.appendChild(secondaryInfo);
        // Ingredients list
        const ingredientsList = document.createElement('ul');
        ingredientsList.classList.add('recipe__ingredients');
        secondaryInfo.appendChild(ingredientsList);
        // Ingredient Item
        for (const iterator of this.ingredients) {
            const recipeIngredients = document.createElement('li');
            // if name, quantity and unit available
            if (iterator.ingredient && iterator.quantity && iterator.unit) {
                recipeIngredients.innerHTML = `<span class="recipe__ingredient-name">${iterator.ingredient}:</span> <span class="recipe__ingredient-quantity">${iterator.quantity} ${iterator.unit}</span>`;
                ingredientsList.appendChild(recipeIngredients);
                // if name and quantity is available
            } else if (iterator.ingredient && iterator.quantity) {
                recipeIngredients.innerHTML = `<span class="recipe__ingredient-name">${iterator.ingredient}:</span> <span class="recipe__ingredient-quantity">${iterator.quantity}`;
                ingredientsList.appendChild(recipeIngredients);
                // if name only
            } else if (iterator.ingredient) {
                recipeIngredients.innerHTML = `<span class="recipe__ingredient-name">${iterator.ingredient}:</span> `;
                ingredientsList.appendChild(recipeIngredients);
            }
        }
        // Recipe steps
        const recipeSteps = document.createElement('p');
        recipeSteps.classList.add('recipe__steps');
        recipeSteps.textContent = this.description;
        secondaryInfo.appendChild(recipeSteps);

        return recipeCard;

        // Version using template string
        /*
        const recipeCard = document.createElement('article');
        recipeCard.classList.add('recipe');

        // Getters (not used anymore)
        // const getIngredients = () => {
        //     let ingredientsList = []
        //     for (const iterator of this.ingredients) {
        //         ingredientsList.push(`${iterator.ingredient}`)
        //     }
        //     return ingredientsList; 
        // }

        // const getQuantity = () => {
        //     let quantityList = []
        //     for (const iterator of this.ingredients) {
        //         quantityList.push(`${iterator.quantity}`)
        //     }
        //     return quantityList; 
        // }

        const makeIngredientList = () => {
            for (const iterator of this.ingredients) {
                const ingredientContainer = document.createElement('li');
                // Create ingredient
                const ingredientValue = document.createElement('span');
                ingredientValue.classList.add('recipe__ingredient-name');
                ingredientValue.textContent = `${iterator.ingredient}:`;
                ingredientContainer.appendChild(ingredientValue);
                // Create quantity
                const quantityValue = document.createElement('span');
                quantityValue.classList.add('recipe__ingredient-quantity');
                quantityValue.textContent = ` ${iterator.quantity}`;
                ingredientContainer.appendChild(quantityValue);
                // Create units (if available)
                if (iterator.unit) {
                    const unitValue = document.createElement('span');
                    unitValue.classList.add('recipe__ingredient-unit');
                    unitValue.textContent = `${iterator.unit}`;
                    ingredientContainer.appendChild(unitValue);
                }
                return ingredientContainer.innerHTML;

                // ingredientItem.innerHTML = `<span class="recipe__ingredient-name">${iterator.ingredient}:</span> <span class="recipe__ingredient-quantity">${iterator.quantity} ${iterator.unit}</span>`;
                // return ingredientItem.innerHTML;
            }          
        }

        recipeCard.innerHTML = `
        <div class="recipe__image-preview">
        <a href="#">
            <img src="./assets/preview-recipe.jpg" alt="preview recette">
        </a>
        </div>
        <div class="recipe__description">
            <div class="recipe__main-info">
                <h2 class="recipe__name">${this.name}</h2>
                <p class="recipe__duration">${this.time} min</p>
            </div>

            <div class="recipe__secondary-info">
                <ul class="recipe__ingredients">
                    ${makeIngredientList()}
                </ul>
                <p class="recipe__steps">${this.description}</p>
            </div>
        </div>`
        return recipeCard; */
    }

    //  createFilterLists(type) {
    //     // TODO : sort by alphabetical order

    //     for (const iterator of this.type) {
    //         console.log(iterator.type);
    //         const listItem = document.createElement('li');
    //         listItem.textContent = iterator.type;
    //         document.querySelector(`.${type}-list`).appendChild(listItem);
    //     }
    //  }
    // ? Use extend ?
}
