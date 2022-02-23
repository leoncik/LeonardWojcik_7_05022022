import { recipes } from '../data/recipes.js';
import { Recipe } from './classes/Recipe.js';
import { FilterList } from './classes/FilterList.js';
import {
    enableDropdown,
    enableSelectFilter,
} from './components/dropdownFilters.js';
// import { sortAlphabetically } from './utils/helpers.js';

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
const displayFilterLists = (recipes) => {
    recipes.forEach((element) => {
        let recipeModel = new FilterList(element);
        // Display
        recipeModel.createFilterList('ingredients');
        recipeModel.createFilterList('appliance');
        recipeModel.createFilterList('utensils');
        // Sort
        recipeModel.sortFilterList('ingredients');
        recipeModel.sortFilterList('appliance');
        recipeModel.sortFilterList('utensils');
    });
};

// Get ingredient list (test)
let testList = [];
let completeTestList = [];
const getListTest = () => {
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
    // ? 254 ingredients (when not preventing duplication) is more than what is displayed inside filter dropdown
};

// Sort ingredient list (test)
const sortListTest = (list) => {
    list.sort((a, b) => {
        return a.localeCompare(b);
    });
    console.log(completeTestList);
};

// Display ingredient list (test)
const displayListTest = (list) => {
    list.forEach((element) => {
        let recipeModelTest = new FilterList(element);
        // Display
        recipeModelTest.createFilterListTest(completeTestList);
    });
};

// Initialize recipes page
const initRecipesPage = () => {
    displayRecipes(recipes);
    displayFilterLists(recipes);
    // sortAlphabetically(recipes, '.ingredients__list');
    enableDropdown();
    enableSelectFilter();
    getListTest();
    sortListTest(completeTestList);
    displayListTest(completeTestList);
};

initRecipesPage();
