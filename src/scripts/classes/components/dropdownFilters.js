// DOM elements
const listContainers = document.querySelectorAll('.search-options ul');



// Open and close dropdown functions

// const triggerDropdown = () => {
//     console.log(e.target);
//     document.querySelector('.ingredients-search .dropdown-button').type = 'text';
//     document.querySelector('.ingredients-search ul').classList.remove('unexpanded');
//     document.querySelector('.ingredients-search .dropdown-button').value = '';
//     document.querySelector('.ingredients-search .dropdown-button').setAttribute('placeholder', 'Rechercher un INGRÉDIENT');
// }

// const closeDropdown = () => {
//     document.querySelector('.ingredients-search .dropdown-button').value = 'Ingrédients / Appareils / Ustensiles';
//     document.querySelector('.ingredients-search ul').classList.add('unexpanded');
// }

// Enable dropdown
export const enableDropdown = () => {
    const dropdownTrigger = document.querySelectorAll('.dropdown-button')
    for (const iterator of dropdownTrigger) {
        // Expand dropdown
        iterator.addEventListener('click', (e) => {
            switch (e.target.value) {
                case 'Ingrédients':
                    let currentTrigger = document.querySelector('.ingredients-search .dropdown-button');
                    let currentListContainer = document.querySelector('.ingredients-search ul'); 
                    currentTrigger.type = 'text';
                    currentListContainer.classList.add('expanded');
                    currentTrigger.value = '';
                    currentTrigger.classList.add('search-mode');
                    currentTrigger.setAttribute('placeholder', 'Rechercher un ingrédient');
                    break;

                case 'Appareils':
                    currentTrigger = document.querySelector('.appliance-search .dropdown-button');
                    currentListContainer = document.querySelector('.appliance-search ul'); 
                    currentTrigger.type = 'text';
                    currentListContainer.classList.add('expanded');
                    currentTrigger.value = '';
                    currentTrigger.setAttribute('placeholder', 'Rechercher un appareil');
                    break;

                case 'Ustensiles':
                    currentTrigger = document.querySelector('.ustensils-search .dropdown-button');
                    currentListContainer = document.querySelector('.ustensils-search ul'); 
                    currentTrigger.type = 'text';
                    currentListContainer.classList.add('expanded');
                    currentTrigger.value = '';
                    currentTrigger.setAttribute('placeholder', 'Rechercher un ustensile');
                    break;

                default:
                    break;
            }
        });
        // Close dropdown
        iterator.addEventListener('blur', (e) => {
            document.querySelector('.ingredients-search .dropdown-button').value = 'Ingrédients';
            document.querySelector('.appliance-search .dropdown-button').value = 'Appareils';
            document.querySelector('.ustensils-search .dropdown-button').value = 'Ustensiles';
            document.querySelector('.ingredients-search ul').classList.remove('expanded');
            document.querySelector('.appliance-search ul').classList.remove('expanded');
            document.querySelector('.ustensils-search ul').classList.remove('expanded');

        });
        // Close dropdown
        // iterator.addEventListener('blur', closeDropdown(e));
    }
}