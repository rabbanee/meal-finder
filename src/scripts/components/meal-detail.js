class MealDetail extends HTMLElement {
    set meal(meal) {
        this._meal = meal;
        this.render();
    }

    connectedCallback() {
        this.render();
    }
    render() {
        function strIngredient(meal) {
            let result = '';
            let keys = Object.keys(meal);
            for (let index = 0; index < 20; index++) {
                let str = keys[9 + index];
                let str2 = keys[29 + index];
                if (meal[str] === '') {
                    break;
                }
                result += `<li class="list-group-item list-group-item-salmon">${ meal[str2]}  ${meal[str]}</li>`;

            }
            return result;
        }
        this.innerHTML = `
             <!-- Modal -->
            <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 h5 class = "modal-title" id="exampleModalLongTitle">${this._meal == undefined ? '' : this._meal.strMeal} </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="container">
                            <div class="row">
                                <div class="col">
                                    <p>Tags : ${this._meal == undefined ? '' : this._meal.strTags == null ? '-' : this._meal.strTags}</p>
                                    <p>Recipes: </p>
                                    <ul class="list-group">
                                        ${this._meal == undefined ? '' : strIngredient(this._meal)}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <a href="${this._meal == undefined ? '' :this._meal.strYoutube}" class="btn btn-salmon" target="_blank">View video</a>
                    </div>
                    </div>
                </div>
            </div>

        `;
    }
}
customElements.define('meal-detail', MealDetail);