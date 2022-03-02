import { Recipe } from '../classes/Recipe';
import { FilterList } from '../classes/FilterList';
import { recipes } from '../../data/recipes';
import { emptyHtmlElement } from '../utils/helpers';

// NO RESULT MESSAGE
const noResultMessage = () => {
    document.querySelector(
        '.results'
    ).innerHTML = `<p class="no-result-message">Aucune recette ne correspond à votre critère... vous pouvez
  chercher «&nbsp;tarte aux pommes&nbsp;», «&nbsp;poisson&nbsp;», etc.</p>`;
};

// UPDATE FILTERS AFTER MAIN RESEARCH
const updateFilterOptions = (currentRecipes) => {
    // INIT FILTER LISTS
    const filterList = new FilterList(currentRecipes);
    // Get lists
    let ingredientList = filterList.getFilterLists(
        currentRecipes,
        'ingredients'
    );
    let applianceList = filterList.getFilterLists(currentRecipes, 'appliance');
    let utensilsList = filterList.getFilterLists(currentRecipes, 'utensils');
    // Filter lists
    filterList.sortList(ingredientList);
    filterList.sortList(applianceList);
    filterList.sortList(utensilsList);
    // Remove previous options
    emptyHtmlElement('.ingredients__list');
    emptyHtmlElement('.appliance__list');
    emptyHtmlElement('.utensils__list');
    // Display lists
    filterList.displayList(ingredientList, 'ingredients');
    filterList.displayList(applianceList, 'appliance');
    filterList.displayList(utensilsList, 'utensils');
};

// MAIN BAR RESEARCH
// TODO : reset results if mainResearchString.length < 3
const mainSearchBar = document.querySelector('.primary-search input');
export const enableMainResearch = () => {
    mainSearchBar.addEventListener('input', (e) => {
        const mainResearchString = e.target.value.toLowerCase();
        if (mainResearchString.length >= 3) {
            // Get recipes list
            const recipeListObject = new Recipe(recipes);
            let recipeList = recipeListObject.getRecipesList(recipes);
            // Filter recipes list
            // TODO : search inside utensils.
            const filteredRecipes = recipeList.filter(
                (elt) =>
                    elt.name.toLowerCase().includes(mainResearchString) ||
                    elt.appliance.toLowerCase().includes(mainResearchString) ||
                    elt.description.toLowerCase().includes(mainResearchString)
            );
            emptyHtmlElement('.results');
            // Display recipes on page or "no found" message.
            if (filteredRecipes.length !== 0) {
                recipeListObject.displayRecipes(filteredRecipes);
                updateFilterOptions(filteredRecipes);
            } else {
                noResultMessage();
                emptyHtmlElement('.ingredients__list');
                emptyHtmlElement('.appliance__list');
                emptyHtmlElement('.utensils__list');
            }
        }
        console.log(mainResearchString.length);
    });
};

// FILTER OPTIONS RESEARCH
