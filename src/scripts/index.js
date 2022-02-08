import { recipes } from '../data/recipes.js';
import { Recipe } from './classes/Recipe.js';

// DOM elements
const mainResults = document.querySelector('.results');

// Display recipes card on page
const displayRecipes = (recipe) => {
    recipe.forEach((element) => {
        let recipeModel = new Recipe(element);
        const recipeCard = recipeModel.createRecipeCard();
        mainResults.append(recipeCard);
    });
}

// Display filter options lists (WIP)
// const displayFilterLists = (recipe) => {
//     recipe.forEach((element) => {
//         let recipeModel = new Recipe(element);
//         const listOption = recipeModel.createFilterLists(appliance);
//     });
// }

// Initialize recipes page
const initRecipesPage = () => {
    displayRecipes(recipes);
    // displayFilterLists(recipesArray);
}

initRecipesPage();