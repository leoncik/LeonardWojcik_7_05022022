import { Recipe } from '../classes/Recipe';
import { recipes } from '../../data/recipes';
import { emptyHtmlElement } from '../utils/helpers';

// NO RESULT MESSAGE
// TODO : Add Non-breaking space (nbsp).
const noResultMessage = () => {
    document.querySelector(
        '.results'
    ).innerHTML = `<p class="no-result-message">Aucune recette ne correspond à votre critère... vous pouvez
  chercher « tarte aux pommes », « poisson », etc.</p>`;
};

// MAIN BAR RESEARCH
// TODO : reset results if mainResearchString.length < 3
const mainSearchBar = document.querySelector('.primary-search input');
export const enableMainResearch = () => {
    mainSearchBar.addEventListener('input', (e) => {
        const mainResearchString = e.target.value.toLowerCase();
        if (mainResearchString.length >= 3) {
            console.log('On commence le tri !');
            const recipeListObject = new Recipe(recipes);
            let recipeList = recipeListObject.getRecipesList(recipes);
            console.log(recipeList);
            // TODO : search inside utensils.
            const filteredRecipes = recipeList.filter(
                (elt) =>
                    elt.name.toLowerCase().includes(mainResearchString) ||
                    elt.appliance.toLowerCase().includes(mainResearchString) ||
                    elt.description.toLowerCase().includes(mainResearchString)
            );
            emptyHtmlElement('.results');
            filteredRecipes.length !== 0
                ? recipeListObject.displayRecipes(filteredRecipes)
                : noResultMessage();
            console.log(filteredRecipes);
        }
        console.log(mainResearchString.length);
    });
};

// FILTER OPTIONS RESEARCH
