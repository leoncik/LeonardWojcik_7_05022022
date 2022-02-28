import { recipes } from '../data/recipes.js';
import { Recipe } from './classes/Recipe.js';
import { FilterList } from './classes/FilterList.js';
import {
    enableDropdown,
    enableSelectFilter,
} from './components/dropdownFilters.js';

// Display filter options lists (OLD VERSION)
// const displayFilterLists = (recipes) => {
//     recipes.forEach((element) => {
//         let recipeModel = new FilterList(element);
//         // Display
//         recipeModel.createFilterList('ingredients');
//         recipeModel.createFilterList('appliance');
//         recipeModel.createFilterList('utensils');
//         // Sort
//         recipeModel.sortFilterList('ingredients');
//         recipeModel.sortFilterList('appliance');
//         recipeModel.sortFilterList('utensils');
//     });
// };

// Initialize recipes page
const initRecipesPage = () => {
    // Init filter lists
    const myFilterList = new FilterList(recipes);
    let currentList = myFilterList.getListTest(recipes);
    myFilterList.sortListTest(currentList);
    myFilterList.displayListTest(currentList);

    // Init recipes
    const myRecipe = new Recipe(recipes);
    myRecipe.displayRecipes(recipes);

    // Enable dropdown
    enableDropdown();
    enableSelectFilter();
};

initRecipesPage();
