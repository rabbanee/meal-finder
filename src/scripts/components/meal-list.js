import './meal-item';

class MealList extends HTMLElement {

    set meals(meals) {
        this._meals = meals;
        this.render();
    }

    render() {
        this.innerHTML = ``;
        this._meals.forEach(meal => {
            const mealItemElement = document.createElement('meal-item');
            
            mealItemElement.meal = meal;
            this.appendChild(mealItemElement);
        });
    }

    renderError(msg) {
        this.innerHTML = `
            <h2 class="placeholder">${msg}</h2>
        `;

    }
}
customElements.define('meal-list', MealList);