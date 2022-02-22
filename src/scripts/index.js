import { recipes } from '../data/recipes.js';
import { Recipe } from './classes/Recipe.js';
import { FilterList } from './classes/FilterList.js';
import {
    enableDropdown,
    enableSelectFilter,
} from './components/dropdownFilters.js';

// DOM elements
const mainResults = document.querySelector('.results');

// Display recipes card on page
const displayRecipes = (recipe) => {
    recipe.forEach((element) => {
        let recipeModel = new Recipe(element);
        const recipeCard = recipeModel.createRecipeCard();
        mainResults.append(recipeCard);
    });
};

// Display filter options lists
// ! Needs refactor (Eslint error : listOptionIngredients' is assigned a value but never used)
/* eslint-disable */
const displayFilterLists = (recipes) => {
    recipes.forEach((element) => {
        let recipeModel = new FilterList(element);
        const listOptionIngredients =
            recipeModel.createFilterList('ingredients');
        const listOptionAppliance = recipeModel.createFilterList('appliance');
        const listOptionUtensils = recipeModel.createFilterList('utensils');
    });
};
/* eslint-enable */

// Initialize recipes page
const initRecipesPage = () => {
    displayRecipes(recipes);
    displayFilterLists(recipes);
    enableDropdown();
    enableSelectFilter();
};

initRecipesPage();
