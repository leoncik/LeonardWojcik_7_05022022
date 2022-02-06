 export class Recipes {
     constructor(data) {
         this.name = data.name;
         this.ingredients = data.ingredients;
         this.appliance = data.appliance;
         this.ustensils = data.ustensils;
     }

     createRecipeCard() {

        /* <article> ... Write structure here to improve readability </article> */


        const article = document.createElement('article');

        // PREVIEW PICTURE
        // TODO : improve alt text.
        const recipePicture = document.createElement('img');
        recipePicture.setAttribute('src', 'assets/preview-recipe.jpg');
        recipePicture.setAttribute('alt', `Image de la recette`);
        article.appendChild(recipePicture);

        // NAME
        const recipeName = document.createElement('h2');
        recipeName.textContent = this.name;
        article.appendChild(recipeName);

        // INGREDIENTS
        // TODO : check if quantity and unit is available before displaying.
        // Create ingredient list
        for (const iterator of this.ingredients) {
            const recipeIngredients = document.createElement('p');
            recipeIngredients.textContent = `${iterator.ingredient} ${iterator.quantity} ${iterator.unit}`;
            article.appendChild(recipeIngredients);
        }

        // APPLIANCE
        const recipeAppliance = document.createElement('p');
        recipeAppliance.textContent = this.appliance;
        article.appendChild(recipeAppliance);

        // USTENSILS
        const recipeUstensils = document.createElement('p');
        recipeUstensils.textContent = this.ustensils;
        article.appendChild(recipeUstensils);

        return article;

     }
 }
