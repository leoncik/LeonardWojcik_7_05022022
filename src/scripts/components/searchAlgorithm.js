import { Recipe } from '../classes/Recipe';
import { FilterList } from '../classes/FilterList';
import { recipes } from '../../data/recipes';
import { emptyHtmlElement } from '../utils/helpers';
import { SelectedFilterOption } from '../classes/SelectedFilterOption';

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
const mainSearchBar = document.querySelector('.primary-search input');
let filteredRecipes = recipes;
export const enableMainResearch = () => {
    mainSearchBar.addEventListener('input', (e) => {
        const mainResearchString = e.target.value.toLowerCase();
        // Filter recipes after typing 3 letters in main bar
        if (mainResearchString.length >= 3) {
            // Get recipes list
            const recipeListObject = new Recipe(recipes);
            const recipeList = recipeListObject.getRecipesList(recipes);
            // Filter recipes list
            // ! fix : search inside nested arrays (utensils and ingredients).
            filteredRecipes = recipeList.filter(
                (elt) =>
                    elt.name.toLowerCase().includes(mainResearchString) ||
                    elt.ingredients.forEach((element) => {
                        element.ingredient
                            .toLowerCase()
                            .includes(mainResearchString);
                    }) ||
                    elt.appliance.toLowerCase().includes(mainResearchString) ||
                    elt.utensils.forEach((element) => {
                        element.toLowerCase().includes(mainResearchString);
                    }) ||
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
        // Reset recipes if less than 3 letters inside main bar and if recipes has previously been filtered
        if (
            filteredRecipes.length !== recipes.length &&
            mainResearchString.length < 3
        ) {
            emptyHtmlElement('.results');
            recipes.map((recipe) => {
                const recipeClass = new Recipe(recipe);
                recipeClass.displayRecipes();
            });
            filteredRecipes = recipes;
        }
        enableSelectFilter();
    });
};

// FILTER OPTIONS RESEARCH

// Manage selected options
// let selectedIngredientsOptions = [];
// let selectedApplianceOptions = [];
// let selectedUtensilsOptions = [];

export const enableSelectFilter = () => {
    let dropdownOptions = document.querySelectorAll('.search-options li');
    for (const iterator of dropdownOptions) {
        iterator.addEventListener('click', (e) => {
            // DISPLAY SELECTED OPTION ON PAGE
            const currentOption = new SelectedFilterOption(e.target);
            currentOption.createOption();
            // FILTER DISPLAYED RECIPES USING SELECTED FILTER
            const currentOptionContent = e.target.textContent.toLowerCase();
            // Get recipes list
            const recipeListObject = new Recipe(filteredRecipes);
            const recipeList = recipeListObject.getRecipesList(filteredRecipes);
            // Filter recipes list
            // ! fix : search inside nested arrays (utensils and ingredients).
            console.log(filteredRecipes);
            filteredRecipes = recipeList.filter(
                (elt) =>
                    elt.name.toLowerCase().includes(currentOptionContent) ||
                    elt.ingredients.forEach((element) => {
                        element.ingredient
                            .toLowerCase()
                            .includes(currentOptionContent);
                    }) ||
                    elt.appliance
                        .toLowerCase()
                        .includes(currentOptionContent) ||
                    elt.utensils.forEach((element) => {
                        element.toLowerCase().includes(currentOptionContent);
                    }) ||
                    elt.description.toLowerCase().includes(currentOptionContent)
            );
            console.log(filteredRecipes);
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
            enableSelectFilter();
        });
    }
};

// Filter list elements while writing in search field
const secondarySearchBars = document.querySelectorAll('.search-options input');
secondarySearchBars.forEach((element) => {
    element.addEventListener('input', (e) => {
        const secondaryResearchString = e.target.value.toLowerCase();
        const filterList = new FilterList(filteredRecipes);
        switch (e.target.className) {
            case 'ingredients__text-field text-field show': {
                let ingredientList = filterList.getFilterLists(
                    filteredRecipes,
                    'ingredients'
                );
                ingredientList = ingredientList.filter((elt) =>
                    elt.toLowerCase().includes(secondaryResearchString)
                );
                emptyHtmlElement('.ingredients__list');
                filterList.displayList(ingredientList, 'ingredients');
                enableSelectFilter();
                break;
            }

            case 'appliance__text-field text-field show': {
                let applianceList = filterList.getFilterLists(
                    filteredRecipes,
                    'appliance'
                );
                applianceList = applianceList.filter((elt) =>
                    elt.toLowerCase().includes(secondaryResearchString)
                );
                emptyHtmlElement('.appliance__list');
                filterList.displayList(applianceList, 'appliance');
                enableSelectFilter();
                break;
            }

            case 'utensils__text-field text-field show': {
                let utensilsList = filterList.getFilterLists(
                    filteredRecipes,
                    'utensils'
                );
                utensilsList = utensilsList.filter((elt) =>
                    elt.toLowerCase().includes(secondaryResearchString)
                );
                emptyHtmlElement('.utensils__list');
                filterList.displayList(utensilsList, 'utensils');
                enableSelectFilter();
                break;
            }

            default:
                break;
        }
    });
});
