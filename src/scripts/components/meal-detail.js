class MealDetail extends HTMLElement {
    set meal(meal) {
        this._meal = meal;
        this.render();
    }

    connectedCallback() {
        this.render();
    }
    render() {
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
                        <p><b>Tags:</b> ${this._meal == undefined ? '' : 
                            this._meal.strTags
                        }</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>

        `;
    }
}
customElements.define('meal-detail', MealDetail);