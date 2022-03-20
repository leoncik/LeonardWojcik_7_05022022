import { Recipe } from '../classes/Recipe';
import { FilterList } from '../classes/FilterList';
import { recipes } from '../../data/recipes';
import { emptyHtmlElement } from './helpers';
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

// RESULT MESSAGE
const quantityMessageContainer = document.querySelector(
    '.recipes-quantity-message'
);
export const showResultMessage = () => {
    if (filteredRecipes.length === 1) {
        quantityMessageContainer.innerHTML = `<p>1 recette a été trouvée</p>`;
    } else if (filteredRecipes.length > 1) {
        quantityMessageContainer.innerHTML = `<p>${filteredRecipes.length} recettes ont été trouvées</p>`;
    }
};

// Show error message and empty dropdown filter options
const triggerNoResult = () => {
    noResultMessage();
    emptyHtmlElement('.recipes-quantity-message');
    emptyHtmlElement('.ingredients__list');
    emptyHtmlElement('.appliance__list');
    emptyHtmlElement('.utensils__list');
};

// FILTER AND RECIPES DISPLAY FUNCTIONS
// Get and filter recipes list
let filteredRecipes = recipes;
const filterRecipes = (entry, entrySource, entrySourceType = '') => {
    if (entrySource === 'mainBar') {
        // Get recipes list
        const recipeListObject = new Recipe(filteredRecipes);
        const recipeList = recipeListObject.getRecipesList(filteredRecipes);
        // Filter recipes
        // Check if recipe includes entry and if recipe has not already been pushed inside filteredRecipes
        filteredRecipes = [];
        for (let i = recipeList.length; i--; ) {
            if (
                recipeList[i].name.toLowerCase().includes(entry) &&
                !filteredRecipes.includes(recipeList[i])
            ) {
                filteredRecipes.push(recipeList[i]);
            }
            if (
                recipeList[i].ingredients.some((currentValue) =>
                    currentValue.ingredient.toLowerCase().includes(entry)
                ) &&
                !filteredRecipes.includes(recipeList[i])
            ) {
                filteredRecipes.push(recipeList[i]);
            }
            if (
                recipeList[i].description.toLowerCase().includes(entry) &&
                !filteredRecipes.includes(recipeList[i])
            ) {
                filteredRecipes.push(recipeList[i]);
            }
        }
    } else if (entrySource === 'filterOption') {
        // Get recipes list
        const recipeListObject = new Recipe(filteredRecipes);
        const recipeList = recipeListObject.getRecipesList(filteredRecipes);
        // Filter recipes
        switch (entrySourceType) {
            case 'ingredients':
                filteredRecipes = recipeList.filter((elt) =>
                    elt.ingredients.some((currentValue) =>
                        currentValue.ingredient.toLowerCase().includes(entry)
                    )
                );
                break;

            case 'appliance':
                filteredRecipes = recipeList.filter((elt) =>
                    elt.appliance.toLowerCase().includes(entry)
                );
                break;

            case 'utensils':
                filteredRecipes = recipeList.filter((elt) =>
                    elt.utensils.some((currentValue) =>
                        currentValue.toLowerCase().includes(entry)
                    )
                );
                break;

            default:
                break;
        }
    }
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
    if (!selectedOptions.length) return;

    if (selectedIngredientsOptions.length !== 0) {
        selectedIngredientsOptions.map((option) =>
            filterRecipes(option, 'filterOption', 'ingredients')
        );
    }
    if (selectedApplianceOptions.length !== 0) {
        selectedApplianceOptions.map((option) =>
            filterRecipes(option, 'filterOption', 'appliance')
        );
    }
    if (selectedUtensilsOptions.length !== 0) {
        selectedUtensilsOptions.map((option) =>
            filterRecipes(option, 'filterOption', 'utensils')
        );
    }
};

// MAIN BAR RESEARCH
let mainResearchString = '';
let previousMainResearchString = '';
const mainSearchBar = document.querySelector('.primary-search input');
export const enableMainResearch = () => {
    mainSearchBar.addEventListener('input', (e) => {
        previousMainResearchString = mainResearchString;
        mainResearchString = e.target.value.toLowerCase();
        // Filter recipes after typing 3 letters in main bar
        if (mainResearchString.length >= 3) {
            filterRecipes(mainResearchString, 'mainBar');
            checkAndApplyOptions();
            emptyHtmlElement('.results');
            showResultMessage();
            displayRecipes();
            enableSelectFilter();
        }
        // RESET recipes and filter lists if main research input length has been decremented
        if (previousMainResearchString.length > mainResearchString.length) {
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
            if (mainResearchString.length >= 3) {
                filterRecipes(mainResearchString, 'mainBar');
            }
            checkAndApplyOptions();
            emptyHtmlElement('.results');
            showResultMessage();
            displayRecipes();
            enableSelectFilter();
        }
    });
};

// FILTER OPTIONS RESEARCH

// Manage selected options
let selectedOptions = [];
let selectedIngredientsOptions = [];
let selectedApplianceOptions = [];
let selectedUtensilsOptions = [];

// ADD FILTER OPTIONS
const addFilterOptions = () => {
    let dropdownOptions = document.querySelectorAll('.search-options li');
    for (const iterator of dropdownOptions) {
        iterator.addEventListener('click', (e) => {
            // DISPLAY SELECTED OPTION ON PAGE
            // Check if target element is not already selected
            if (!selectedOptions.includes(e.target.textContent.toLowerCase())) {
                selectedOptions = [
                    ...selectedOptions,
                    e.target.textContent.toLowerCase(),
                ];
                const currentOption = new SelectedFilterOption(e.target);
                currentOption.createOption();
                const currentOptionContent = e.target.textContent.toLowerCase();
                switch (e.target.parentNode.className) {
                    case 'ingredients__list show':
                        selectedIngredientsOptions = [
                            ...selectedIngredientsOptions,
                            e.target.textContent.toLowerCase(),
                        ];
                        // FILTER DISPLAYED RECIPES USING SELECTED FILTER
                        filterRecipes(
                            currentOptionContent,
                            'filterOption',
                            'ingredients'
                        );
                        break;

                    case 'appliance__list show':
                        selectedApplianceOptions = [
                            ...selectedApplianceOptions,
                            e.target.textContent.toLowerCase(),
                        ];
                        // FILTER DISPLAYED RECIPES USING SELECTED FILTER
                        filterRecipes(
                            currentOptionContent,
                            'filterOption',
                            'appliance'
                        );
                        break;

                    case 'utensils__list show':
                        selectedUtensilsOptions = [
                            ...selectedUtensilsOptions,
                            e.target.textContent.toLowerCase(),
                        ];
                        // FILTER DISPLAYED RECIPES USING SELECTED FILTER
                        filterRecipes(
                            currentOptionContent,
                            'filterOption',
                            'utensils'
                        );
                        break;

                    default:
                        break;
                }
                emptyHtmlElement('.results');
                showResultMessage();
                displayRecipes();
                enableSelectFilter();
            }
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
            // Check if target element is present on page.
            if (e.target.parentElement === displayedOptionsContainer) {
                displayedOptionsContainer.removeChild(e.target);
                const displayedOptionText = e.target.textContent.toLowerCase();
                // Remove option from selected options lists
                selectedOptions = selectedOptions.filter(
                    (elt) => elt != displayedOptionText
                );
                switch (e.target.className) {
                    case 'selected-filters__item selected-filters__item_ingredient':
                        selectedIngredientsOptions =
                            selectedIngredientsOptions.filter(
                                (elt) => elt != displayedOptionText
                            );
                        break;

                    case 'selected-filters__item selected-filters__item_appliance':
                        selectedApplianceOptions =
                            selectedApplianceOptions.filter(
                                (elt) => elt != displayedOptionText
                            );
                        break;

                    case 'selected-filters__item selected-filters__item_utensils':
                        selectedUtensilsOptions =
                            selectedUtensilsOptions.filter(
                                (elt) => elt != displayedOptionText
                            );
                        break;

                    default:
                        break;
                }
                // RESET RECIPES
                emptyHtmlElement('.results');
                filteredRecipes = recipes;
                // Filter using main bar if more than 3 characters
                if (mainResearchString.length >= 3) {
                    filterRecipes(mainResearchString, 'mainBar');
                }
                // Apply filters if available
                checkAndApplyOptions();
                showResultMessage();
                displayRecipes();
                enableSelectFilter();
            }
        });
    }
};

export const enableSelectFilter = () => {
    addFilterOptions();
    removeFilterOptions();
};

// Filter list elements while writing in search field
let secondaryResearchString = '';
const secondarySearchBars = document.querySelectorAll('.search-options input');
secondarySearchBars.forEach((element) => {
    element.addEventListener('input', (e) => {
        secondaryResearchString = e.target.value.toLowerCase();
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
                filterList.sortList(ingredientList);
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
                filterList.sortList(applianceList);
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
                filterList.sortList(utensilsList);
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

// Reset secondary search text and lists inside dropdown.
export const resetSecondarySearch = (listElement) => {
    secondaryResearchString = '';
    const filterList = new FilterList(filteredRecipes);
    switch (listElement) {
        case 'ingredients': {
            let ingredientList = filterList.getFilterLists(
                filteredRecipes,
                'ingredients'
            );
            filterList.sortList(ingredientList);
            emptyHtmlElement('.ingredients__list');
            filterList.displayList(ingredientList, 'ingredients');
            enableSelectFilter();
            break;
        }

        case 'appliance': {
            let applianceList = filterList.getFilterLists(
                filteredRecipes,
                'appliance'
            );
            filterList.sortList(applianceList);
            emptyHtmlElement('.appliance__list');
            filterList.displayList(applianceList, 'appliance');
            enableSelectFilter();
            break;
        }

        case 'utensils': {
            let utensilsList = filterList.getFilterLists(
                filteredRecipes,
                'utensils'
            );
            filterList.sortList(utensilsList);
            emptyHtmlElement('.utensils__list');
            filterList.displayList(utensilsList, 'utensils');
            enableSelectFilter();
            break;
        }

        default:
            break;
    }
};
