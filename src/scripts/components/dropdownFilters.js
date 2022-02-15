/*
! NEW VERSION */
// TODO : close dropdown if menu is open and user clicks outside of It to prevent bugs
/*
const dropdownTriggers = document.querySelectorAll('.dropdown-trigger');
const textFields = document.querySelectorAll('.text-field');

export const enableDropdown = () => {
    // Open dropdown
    for (const iterator of dropdownTriggers) {
      iterator.addEventListener('mousedown', (e) => {
        switch (e.target.className) {
          case 'ingredients__dropdown-trigger dropdown-trigger':
            document.querySelector('.ingredients__list').classList.add('show');
            document.querySelector('.ingredients__text-field').classList.add('show');
            break;
  
          case 'appliance__dropdown-trigger dropdown-trigger':
            document.querySelector('.appliance__list').classList.add('show');
            document.querySelector('.appliance__text-field').classList.add('show');
            break;
  
          case 'ustensils__dropdown-trigger dropdown-trigger':
            document.querySelector('.ustensils__list').classList.add('show');
            document.querySelector('.ustensils__text-field').classList.add('show');
            break;
        
          default:
            break;
        }
      })
    }
  
    // Close dropdown
    for (const iterator of textFields) {
      iterator.addEventListener('blur', (e) => {
        switch (e.target.className) {
          case 'ingredients__text-field text-field show':
            document.querySelector('.ingredients__list').classList.remove('show');
            document.querySelector('.ingredients__text-field').classList.remove('show');
            break;
  
          case 'appliance__text-field text-field show':
            document.querySelector('.appliance__list').classList.remove('show');
            document.querySelector('.appliance__text-field').classList.remove('show');
            break;
  
          case 'ustensils__text-field text-field show':
            document.querySelector('.ustensils__list').classList.remove('show');
            document.querySelector('.ustensils__text-field').classList.remove('show');
            break;
        
          default:
            break;
        }
      })
    }
  }
*/
/*
! OLD VERSION */

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
        iterator.addEventListener('mousedown', (e) => {
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
        iterator.addEventListener('blur', (e) => {
          console.log(e.target);
          switch (e.target.className) {
            case 'ingredients-button dropdown-button search-mode':
              document.querySelector('.ingredients-search .dropdown-button').value = 'Ingrédients';
              document.querySelector('.ingredients-search .dropdown-button').type = 'button';
              document.querySelector('.ingredients-search .dropdown-button').classList.remove('search-mode');
              document.querySelector('.ingredients-search ul').classList.remove('expanded');                 
                break;

            case 'appliance-button dropdown-button search-mode':
              document.querySelector('.appliance-search .dropdown-button').value = 'Appareils';
              document.querySelector('.appliance-search .dropdown-button').type = 'button';
              document.querySelector('.appliance-search .dropdown-button').classList.remove('search-mode');
              document.querySelector('.appliance-search ul').classList.remove('expanded');
                break;

            case 'ustensils-button dropdown-button search-mode':
              document.querySelector('.ustensils-search .dropdown-button').value = 'Ustensiles';
              document.querySelector('.ustensils-search .dropdown-button').type = 'button';
              document.querySelector('.ustensils-search .dropdown-button').classList.remove('search-mode');
              document.querySelector('.ustensils-search ul').classList.remove('expanded');
                break;
        
            default:
                break;
        }












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