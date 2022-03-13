import { Recipe } from '../classes/Recipe';
import { FilterList } from '../classes/FilterList';
import { recipes } from '../../data/recipes';
import { emptyHtmlElement } from '../utils/helpers';
import { SelectedFilterOption } from '../classes/SelectedFilterOption';

// NO RESULT FOUND FUNCTIONS

// Display no result message on page
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

// Show error message and empty dropdown filter options
const triggerNoResult = () => {
    noResultMessage();
    emptyHtmlElement('.ingredients__list');
    emptyHtmlElement('.appliance__list');
    emptyHtmlElement('.utensils__list');
};

// FILTER AND RECIPES DISPLAY FUNCTIONS
// Get and filter recipes list
let filteredRecipes = recipes;
const filterRecipes = (entry) => {
    // Get recipes list
    const recipeListObject = new Recipe(filteredRecipes);
    const recipeList = recipeListObject.getRecipesList(filteredRecipes);
    // Filter recipes
    console.log(entry);
    filteredRecipes = recipeList.filter(
        (elt) =>
            elt.name.toLowerCase().includes(entry) ||
            // ! Only works when clicking on filters
            elt.ingredients
                .map((innerElt) => innerElt.ingredient.toLowerCase())
                .includes(entry) ||
            elt.appliance.toLowerCase().includes(entry) ||
            // ! Only works when clicking on filters
            elt.utensils
                .map((innerElt) => innerElt.toLowerCase())
                .includes(entry) ||
            // ! no result
            // elt.utensils
            // .map((innerElt) => innerElt.toLowerCase())
            // .includes('conome') ||
            // ! results
            // elt.utensils
            // .map((innerElt) => innerElt.toLowerCase())
            // .includes('économe') ||
            elt.description.toLowerCase().includes(entry)
    );
};

// Display recipes on page or "no found" message.
const displayRecipes = () => {
    if (filteredRecipes.length !== 0) {
        filteredRecipes.map((recipe) => {
            const recipeClass = new Recipe(recipe);
            recipeClass.displayRecipes();
        });
        updateFilterOptions(filteredRecipes);
    } else {
        triggerNoResult();
    }
};

// Check if a filter option is selected and apply It to filter recipes.
const checkAndApplyOptions = () => {
    if (selectedOptions.length !== 0) {
        selectedOptions.map((option) => filterRecipes(option));
    }
};

// MAIN BAR RESEARCH
let mainResearchString = '';
const mainSearchBar = document.querySelector('.primary-search input');
export const enableMainResearch = () => {
    mainSearchBar.addEventListener('input', (e) => {
        mainResearchString = e.target.value.toLowerCase();
        // Filter recipes after typing 3 letters in main bar
        if (mainResearchString.length >= 3) {
            filterRecipes(mainResearchString);
            checkAndApplyOptions();
            emptyHtmlElement('.results');
            displayRecipes();
            enableSelectFilter();
        }
        // RESET recipes and filter lists if less than 3 letters inside main bar and if recipes has previously been filtered
        if (
            filteredRecipes.length !== recipes.length &&
            mainResearchString.length < 3
        ) {
            // Reset recipes
            filteredRecipes = recipes;
            // Reset filters lists
            const filterList = new FilterList(recipes);
            const lists = filterList.lists;
            // Get currents lists, filter them, empty previous lists and display filtered ones
            lists.map((list) => {
                let dataList = filterList.getFilterLists(recipes, list);
                filterList.sortList(dataList);
                emptyHtmlElement(`.${list}__list`);
                filterList.displayList(dataList, list);
            });
            checkAndApplyOptions();
            emptyHtmlElement('.results');
            displayRecipes();
            enableSelectFilter();
        }
    });
};

// FILTER OPTIONS RESEARCH

// Manage selected options
let selectedOptions = [];
// let selectedIngredientsOptions = [];
// let selectedApplianceOptions = [];
// let selectedUtensilsOptions = [];

// ADD FILTER OPTIONS
const addFilterOptions = () => {
    let dropdownOptions = document.querySelectorAll('.search-options li');
    for (const iterator of dropdownOptions) {
        iterator.addEventListener('click', (e) => {
            // DISPLAY SELECTED OPTION ON PAGE
            selectedOptions = [
                ...selectedOptions,
                e.target.textContent.toLowerCase(),
            ];
            const currentOption = new SelectedFilterOption(e.target);
            currentOption.createOption();
            // FILTER DISPLAYED RECIPES USING SELECTED FILTER
            const currentOptionContent = e.target.textContent.toLowerCase();
            filterRecipes(currentOptionContent);
            emptyHtmlElement('.results');
            displayRecipes();
            enableSelectFilter();
        });
    }
};

// REMOVE FILTER OPTIONS
const removeFilterOptions = () => {
    const displayedOptionsContainer =
        document.querySelector('.selected-filters');
    const displayedOptions = document.querySelectorAll(
        '.selected-filters__item'
    );
    for (const iterator of displayedOptions) {
        iterator.addEventListener('click', (e) => {
            displayedOptionsContainer.removeChild(e.target);
            const displayedOptionText = e.target.textContent.toLowerCase();
            selectedOptions = selectedOptions.filter(
                (elt) => elt != displayedOptionText
            );
            // RESET RECIPES
            emptyHtmlElement('.results');
            filteredRecipes = recipes;
            // Filter using main bar if more than 3 characters
            if (mainResearchString.length >= 3) {
                filterRecipes(mainResearchString);
            }
            // Apply filters if available
            checkAndApplyOptions();
            displayRecipes();
            enableSelectFilter();
        });
    }
};

export const enableSelectFilter = () => {
    addFilterOptions();
    removeFilterOptions();
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
