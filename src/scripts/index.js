import { fetchRecipes } from '../scripts/api/api.js';
import { Recipes } from '../scripts/factories/recipesFactory.js';

// DOM elements
const mainResults = document.querySelector('.results');

// Display recipes card on page
const displayRecipes = (recipe) => {
    recipe.forEach((element) => {
        let recipeModel = new Recipes(element);
        const recipeCard = recipeModel.createRecipeCard();
        mainResults.append(recipeCard);
    });
}

// Initialize recipes page
const initRecipesPage = async () => {
    const recipesData = await fetchRecipes(
        'src/data/recipesConverted.json'
    );
    const recipesArray = await recipesData.recipes;
    displayRecipes(recipesArray);
}

initRecipesPage();