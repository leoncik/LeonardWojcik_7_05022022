// DOM elements
const listContainers = document.querySelectorAll('.search-options ul');



// Open dropdown
const openDropdown = (elt, placeholder) => {
    let currentTrigger = document.querySelector(
        `${elt} .dropdown-button`
    );
    let currentListContainer = document.querySelector(`${elt} ul`);
    currentTrigger.type = 'text';
    currentListContainer.classList.add('expanded');
    currentTrigger.value = '';
    currentTrigger.classList.add('search-mode');
    currentTrigger.setAttribute('placeholder', placeholder);
}

// Enable dropdown
export const enableDropdown = () => {
    const dropdownTrigger = document.querySelectorAll('.dropdown-button')
    for (const iterator of dropdownTrigger) {
        // Expand dropdown
        iterator.addEventListener('click', (e) => {
            switch (e.target.value) {
                case 'Ingrédients':
                    openDropdown(
                        '.ingredients-search',
                        'Rechercher un ingrédient'
                    );                    
                    break;

                case 'Appareils':
                    openDropdown(
                        '.appliance-search',
                        'Rechercher un appareil'
                    );
                    break;

                case 'Ustensiles':
                    openDropdown(
                        '.ustensils-search',
                        'Rechercher un ustensile'
                    );
                    break;
            
                default:
                    break;
            }
        });
        // Close dropdown
        // iterator.addEventListener('blur', closeDropdown(e));
        iterator.addEventListener('blur', () => {
            document.querySelector('.ingredients-search .dropdown-button').value = 'Ingrédients';
            document.querySelector('.ingredients-search .dropdown-button').classList.remove('search-mode');
            document.querySelector('.appliance-search .dropdown-button').value = 'Appareils';
            document.querySelector('.appliance-search .dropdown-button').classList.remove('search-mode');
            document.querySelector('.ustensils-search .dropdown-button').value = 'Ustensiles';
            document.querySelector('.ustensils-search .dropdown-button').classList.remove('search-mode');
            document.querySelector('.ingredients-search ul').classList.remove('expanded');
            document.querySelector('.appliance-search ul').classList.remove('expanded');
            document.querySelector('.ustensils-search ul').classList.remove('expanded');

        });
    }
}


export const enableSelectFilter = (e) => {
    let dropdownOptions = document.querySelectorAll('.search-options li');
    for (const iterator of dropdownOptions) {
        iterator.addEventListener('click', () => {
            console.log("L'option X a été sélectionnée");
        })        
    }  
}