import { createHtmlElement } from '../utils/helpers';
import recipePreview from '../../../assets/preview-recipe.jpg';

export class Recipe {
    constructor(data) {
        this.name = data.name;
        this.ingredients = data.ingredients;
        this.appliance = data.appliance;
        this.utensils = data.utensils;
        this.description = data.description;
        this.time = data.time;
    }

    getRecipesList(recipes) {
        let recipesList = [];
        recipes.forEach((element) => {
            recipesList = [...recipesList, element];
        });
        return recipesList;
    }

    // ! Unused
    getRecipesIngredientsList(recipes) {
        let recipesIngredientsList = [];
        recipes.forEach((element) => {
            recipesIngredientsList = [
                ...recipesIngredientsList,
                element.ingredients.map((el) => el.ingredient),
            ];
        });
        return recipesIngredientsList;
    }

    createRecipeCard() {
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
        recipeCard.classList.add('recipe');

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
        const recipeImage = createHtmlElement('img', '', '', [
            { key: 'src', value: recipePreview },
            { key: 'alt', value: 'Aperçu de la recette' },
        ]);
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
        const recipeName = createHtmlElement('h2', 'recipe__name', this.name);
        mainInfo.appendChild(recipeName);
        // Recipe duration
        const recipeDuration = createHtmlElement(
            'p',
            'recipe__duration',
            `${this.time} min`
        );
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
        const recipeSteps = createHtmlElement(
            'p',
            'recipe__steps',
            this.description
        );
        secondaryInfo.appendChild(recipeSteps);

        return recipeCard;
    }

    // Display recipes card on page
    displayRecipes() {
        const mainResults = document.querySelector('.results');
        const recipeCard = this.createRecipeCard();
        mainResults.append(recipeCard);
    }
}
