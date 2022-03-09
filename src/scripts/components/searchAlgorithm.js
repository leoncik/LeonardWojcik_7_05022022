// TODO : repeated code, needs refactoring

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
// ! fix : search inside nested arrays (utensils and ingredients).
let filteredRecipes = recipes;
const filterRecipes = (entry) => {
    // Get recipes list
    const recipeListObject = new Recipe(filteredRecipes);
    const recipeList = recipeListObject.getRecipesList(filteredRecipes);
    // Filter recipes
    // ! Tests
    // let testInitial = recipes.filter(recipe => recipe.ingredients.every(ingredient => (ingredient.ingredient == 'Ail' && console.log('Ail trouvé dans test initial'))))
    // console.log(testInitial);
    // let testIngredient = recipeList.map(elt => (elt.ingredients));
    // console.log(testIngredient);
    // let testEvery = testIngredient.every(ingredientArr => (ingredientArr.ingredient === 'Ail' && console.log('Ail test trouvé')));
    // console.log(`testEvery est ${testEvery}`);
    // let testEveryIncludes = test.every(ingredientArr => (ingredientArr.ingredient.toLowerCase().includes('Ail')));
    // console.log(testEveryIncludes);
    // let fidingIngredients = testIngredient.map(element => element.map(elt => (elt.ingredient))).includes('Ail');
    // console.log(`fidingIngredients est ${fidingIngredients}`);
    // let filterTest = recipeList.filter((elt) => elt.ingredients.map((elt) => elt.ingredient).includes('Ail'));
    // console.log(filterTest);
    filteredRecipes = recipeList.filter(
        (elt) =>
            elt.name.toLowerCase().includes(entry) ||
            elt.ingredients
                .map((elt) => elt.ingredient.toLowerCase())
                .includes(entry) ||
            // elt.ingredients.every(ingredientArr => (ingredientArr.ingredient.toLowerCase() === entry.toLowerCase() && console.log('trouvé'))) ||
            // elt.ingredients.every(ingredient => (ingredient.ingredient === 'Ail' && console.log(ingredient.ingredient))) ||
            // elt.ingredients.forEach((element) => {
            //     element.ingredient.toLowerCase().includes(entry);
            // }) ||
            elt.appliance.toLowerCase().includes(entry) ||
            elt.utensils.forEach((element) => {
                element.toLowerCase().includes(entry);
            }) ||
            elt.description.toLowerCase().includes(entry)
    );
};

const createRecipes = () => {
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

// MAIN BAR RESEARCH
const mainSearchBar = document.querySelector('.primary-search input');
export const enableMainResearch = () => {
    mainSearchBar.addEventListener('input', (e) => {
        const mainResearchString = e.target.value.toLowerCase();
        // Filter recipes after typing 3 letters in main bar
        if (mainResearchString.length >= 3) {
            // Get and filter recipes list with main search bar
            filterRecipes(mainResearchString);
            // Filter with selected filter options
            if (selectedOptions.length !== 0) {
                for (const iterator of selectedOptions) {
                    filteredRecipes = filteredRecipes.filter((elt) =>
                        elt.description.toLowerCase().includes(iterator)
                    );
                }
            }
            emptyHtmlElement('.results');
            // Display recipes on page or "no found" message.
            createRecipes();
        }
        // Reset recipes and filter lists if less than 3 letters inside main bar and if recipes has previously been filtered
        if (
            filteredRecipes.length !== recipes.length &&
            mainResearchString.length < 3
        ) {
            // Reset recipes
            emptyHtmlElement('.results');
            recipes.map((recipe) => {
                const recipeClass = new Recipe(recipe);
                recipeClass.displayRecipes();
            });
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
        }
        enableSelectFilter();
    });
};

// FILTER OPTIONS RESEARCH

// Manage selected options
let selectedOptions = [];
// let selectedIngredientsOptions = [];
// let selectedApplianceOptions = [];
// let selectedUtensilsOptions = [];

export const enableSelectFilter = () => {
    // ADD FILTER OPTIONS
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
            // Get and filter recipes list
            filterRecipes(currentOptionContent);
            emptyHtmlElement('.results');
            // Display recipes on page or "no found" message.
            createRecipes();
            enableSelectFilter();
        });
    }

    // REMOVE FILTER OPTIONS
    // TODO : reset recipes after removing filter
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
        });
    }
    // console.log(selectedOptions);
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
