let main = require('../view/main.js');
// import main from '../view/main.js';
import $ from 'jquery';
import DataSource from '../data/data-source.js';
class MealItem extends HTMLElement {
    set meal(meal) {
        this._meal = meal;
        this.render();
    }

    render() {
        this.innerHTML = `
            <img class="meal-thumb" src="${this._meal.strMealThumb}" alt="Meal Thumb">
            <div class="meal-info">
                <h2>${this._meal.strMeal}</h2>
                <p>Category: ${this._meal.strCategory}</p>
                <p>Area: ${this._meal.strArea}</p>
                <!-- Button trigger modal -->
                <button type="button" class="btn btn-salmon btn-detail-meal" data-idMeal="${this._meal.idMeal}">
                    Detail
                </button>
            </div>
        `;
        this.querySelector('.btn-detail-meal').addEventListener('click', function () {
            console.log(this.getAttribute('data-idMeal'));
            DataSource.searchMealById(this.getAttribute('data-idMeal'))
                .then(result => {
                    let r = result[0];
                    const mealDetailElement = document.querySelector('meal-detail');

                    mealDetailElement.meal = r;
                    $('#myModal').modal('show');
                })
                .catch(main.renderResultDetail);
        });
    }
}
customElements.define('meal-item', MealItem);