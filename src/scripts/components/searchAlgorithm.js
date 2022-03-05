import { Recipe } from '../classes/Recipe';
import { FilterList } from '../classes/FilterList';
import { recipes } from '../../data/recipes';
import { emptyHtmlElement } from '../utils/helpers';

// DISPLAY NO RESULT MESSAGE ON PAGE
const noResultMessage = () =>
    (document.querySelector(
        '.results'
    ).innerHTML = `<p class="no-result-message">Aucune recette ne correspond à votre critère... vous pouvez
  chercher «&nbsp;tarte aux pommes&nbsp;», «&nbsp;poisson&nbsp;», etc.</p>`);
// UPDATE FILTERS AFTER MAIN RESEARCH
const updateFilterOptions = (currentRecipes) => {
    // INIT FILTER LISTS
    const filterList = new FilterList(currentRecipes);
    const lists = filterList.lists;
    // Get currents lists, filter them, empty previous lists and display filtered ones
    lists.map((list) => {
        let dataList = filterList.getFilterLists(currentRecipes, list);
        filterList.sortList(dataList);
        emptyHtmlElement(`.${list}__list`);
        filterList.displayList(dataList, list);
    });
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
                filteredRecipes.map((recipe) => {
                    const recipeClass = new Recipe(recipe);
                    recipeClass.displayRecipes();
                });
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

// Filter list elements while writing in search field
const secondarySearchBars = document.querySelectorAll('.search-options input');
secondarySearchBars.forEach((element) => {
    element.addEventListener('input', (e) => {
        console.log(e.target.value);
        // 1) Retrieve current filter list
        // 2) Filter current list with typed text
        // 3) Display results inside filter dropdown
    });
});
