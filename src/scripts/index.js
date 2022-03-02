import { recipes } from '../data/recipes.js';
import { Recipe } from './classes/Recipe.js';
import { FilterList } from './classes/FilterList.js';
import {
    enableDropdown,
    enableSelectFilter,
} from './components/dropdownFilters.js';
import { enableMainResearch } from './components/searchAlgorithm.js';

// Initialize recipes page
const initRecipesPage = () => {
    // INIT FILTER LISTS
    const filterList = new FilterList(recipes);
    // Get lists
    let ingredientList = filterList.getFilterLists(recipes, 'ingredients');
    let applianceList = filterList.getFilterLists(recipes, 'appliance');
    let utensilsList = filterList.getFilterLists(recipes, 'utensils');
    // Filter lists
    filterList.sortList(ingredientList);
    filterList.sortList(applianceList);
    filterList.sortList(utensilsList);
    // Display lists
    filterList.displayList(ingredientList, 'ingredients');
    filterList.displayList(applianceList, 'appliance');
    filterList.displayList(utensilsList, 'utensils');

    // INIT RECIPES
    const recipe = new Recipe(recipes);
    recipe.displayRecipes(recipes);

    // ENABLE DROPDOWN
    enableDropdown();
    enableSelectFilter();

    // ENABLE RESEARCH
    enableMainResearch();
};

initRecipesPage();
