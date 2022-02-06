// Fetch recipes data
const genericFetch = async (
    url,
    err = '<p>Une erreur est survenue lors de la récupération des recettes. Veuillez réessayer plus tard.</p>',
    method = 'GET',
    headers = {}
) => {
    try {
        const response = await fetch(url, { method, headers });
        return await response.json();
    } catch (error) {
        document
            .querySelector('.api-error')
            .insertAdjacentHTML('beforeend', err);
    }
}

export const fetchRecipes = async (path) => {
    const recipesData = await genericFetch(path);
    return recipesData;
}
