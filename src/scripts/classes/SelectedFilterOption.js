export class SelectedFilterOption {
    constructor(item) {
        this.text = item.textContent;
        this.class = item.className;
    }

    createOption() {
        const selectedOption = document.createElement('li');
        selectedOption.classList.add('selected-filters__item');
        switch (this.class) {
            case 'ingredients__item':
                selectedOption.classList.add(
                    'selected-filters__item_ingredient'
                );
                break;

            case 'appliance__item':
                selectedOption.classList.add(
                    'selected-filters__item_appliance'
                );
                break;

            case 'utensils__item':
                selectedOption.classList.add('selected-filters__item_utensils');
                break;

            default:
                break;
        }
        selectedOption.textContent = this.text;
        document.querySelector('.selected-filters').appendChild(selectedOption);
    }
}
