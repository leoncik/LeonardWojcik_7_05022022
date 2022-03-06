const dropdownTriggers = document.querySelectorAll('.dropdown-trigger');
// const textFields = document.querySelectorAll('.text-field');
// const searchOptions = document.querySelectorAll('.search-options >*');

// Open / close functions
const openDropdown = (element, placeholder) => {
    let currentList = document.querySelector(`.${element}__list`);
    let currentTextField = document.querySelector(`.${element}__text-field`);
    let currentTrigger = document.querySelector(
        `.${element}__dropdown-trigger`
    );
    let currentLabel = document.querySelector(`.${element}__label`);
    let currentOption = document.querySelector(`.${element}`);
    let currentDropdownArrow = document.querySelector(
        `.${element} .dropdown-arrow`
    );
    currentList.classList.add('show');
    currentTextField.classList.add('show');
    currentTextField.setAttribute('placeholder', placeholder);
    currentTrigger.classList.add('hide');
    currentLabel.classList.add(`${element}__label_expanded`);
    currentOption.classList.add('active-option');
    currentDropdownArrow.classList.toggle('dropdown-arrow_rotate');
    currentTextField.focus();
};

const closeDropdown = (element) => {
    let currentList = document.querySelector(`.${element}__list`);
    let currentTextField = document.querySelector(`.${element}__text-field`);
    let currentTrigger = document.querySelector(
        `.${element}__dropdown-trigger`
    );
    let currentLabel = document.querySelector(`.${element}__label`);
    let currentOption = document.querySelector(`.${element}`);
    let currentDropdownArrow = document.querySelector(
        `.${element} .dropdown-arrow`
    );
    currentList.classList.remove('show');
    currentTextField.classList.remove('show');
    currentTextField.value = '';
    currentLabel.classList.remove(`${element}__label_expanded`);
    currentOption.classList.remove('active-option');
    currentDropdownArrow.classList.toggle('dropdown-arrow_rotate');
    currentTrigger.classList.remove('hide');
};

// Enable dropdown
export const enableDropdown = () => {
    // Open dropdown
    for (const iterator of dropdownTriggers) {
        iterator.addEventListener('click', (e) => {
            e.preventDefault();
            switch (e.target.className) {
                case 'ingredients__dropdown-trigger dropdown-trigger':
                    openDropdown('ingredients', 'Rechercher un ingrédient');
                    break;

                case 'appliance__dropdown-trigger dropdown-trigger':
                    openDropdown('appliance', 'Rechercher un appareil');
                    break;

                case 'utensils__dropdown-trigger dropdown-trigger':
                    openDropdown('utensils', 'Rechercher un ustensile');
                    break;

                default:
                    break;
            }
        });
    }

    // Close dropdown
    const filterContainers = document.querySelectorAll('.search-options > *');
    const filterLabels = document.querySelectorAll('.search-options label');
    document.addEventListener('click', (e) => {
        // Close targeted dropdown if clicked outside container and if container is active
        filterContainers.forEach((element) => {
            if (
                !element.contains(e.target) &&
                element.classList.contains('active-option')
            ) {
                closeDropdown(`${element.classList[0]}`);
            }
            // Close dropdown if clicked on label and if label is expanded
            filterLabels.forEach((element) => {
                if (
                    element.contains(e.target) &&
                    e.target.classList.contains(
                        `${element.classList[0]}_expanded`
                    )
                ) {
                    closeDropdown(`${element.parentNode.classList[0]}`);
                }
            });
        });
    });
};
