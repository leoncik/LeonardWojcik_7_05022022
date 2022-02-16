// TODO: try to open dropdown with label instead of span

const dropdownTriggers = document.querySelectorAll('.dropdown-trigger');
const textFields = document.querySelectorAll('.text-field');

// Open / close functions
const openDropdown = (element, placeholder) => {
  let currentList = document.querySelector(`${element}__list`);
  let currentTextField = document.querySelector(`${element}__text-field`);
  let currentTrigger = document.querySelector(`${element}__dropdown-trigger`);
  currentList.classList.add('show');
  currentTextField.classList.add('show');
  currentTextField.setAttribute('placeholder', placeholder)
  currentTrigger.classList.add('hide');
  currentTextField.focus();
}

const closeDropdown = (element) => {
  let currentList = document.querySelector(`${element}__list`);
  let currentTextField = document.querySelector(`${element}__text-field`);
  let currentTrigger = document.querySelector(`${element}__dropdown-trigger`);
  currentList.classList.remove('show');
  currentTextField.classList.remove('show');
  currentTextField.value = '';
  currentTrigger.classList.remove('hide');
}

// Enable dropdown
export const enableDropdown = () => {
    // Open dropdown
    for (const iterator of dropdownTriggers) {
      iterator.addEventListener('mousedown', (e) => {
        e.preventDefault();
        switch (e.target.className) {
          case 'ingredients__dropdown-trigger dropdown-trigger':
            openDropdown('.ingredients', 'Rechercher un ingrédient');
            break;
  
          case 'appliance__dropdown-trigger dropdown-trigger':
            openDropdown('.appliance', 'Rechercher un appareil');
            break;
  
          case 'ustensils__dropdown-trigger dropdown-trigger':
            openDropdown('.ustensils', 'Rechercher un ustensile');
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
            closeDropdown('.ingredients');
            break;
  
          case 'appliance__text-field text-field show':
            closeDropdown('.appliance');
            break;
  
          case 'ustensils__text-field text-field show':
            closeDropdown('.ustensils');
            break;
        
          default:
            break;
        }
      })
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