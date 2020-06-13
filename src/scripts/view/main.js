import '../components/search-bar.js';
import '../components/meal-list.js';
import MealItem from '../components/meal-item.js';
import '../components/meal-detail.js';
import DataSource from '../data/data-source.js';

const main = _ => {
    const searchElement = document.querySelector('search-bar');
    const mealListElement = document.querySelector('meal-list');

    const onButtonSearchClicked = _ => {
        DataSource.searchMeal(searchElement.value)
            .then(renderResult)
            .catch(fallbackResult);
    }




    const renderResult = results => {
        mealListElement.meals = results;

    }

    const fallbackResult = msg => {
        mealListElement.renderError(msg);
    }

    searchElement.clickEvent = onButtonSearchClicked;

}

export default main;