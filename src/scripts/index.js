import { fetchRecipes } from '../scripts/api/api.js';

// Initialize recipes page
const initRecipesPage = async () => {
    const recipesData = await fetchRecipes(
        'src/data/recipesConverted.json'
    );
    console.log(recipesData);
}

initRecipesPage();