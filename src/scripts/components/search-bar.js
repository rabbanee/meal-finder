class SearchBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    set clickEvent(e) {
        this._clickEvent = e;
        this.render();
    }

    get value() {
        return this.querySelector('#searchElement').value;
    }


    render() {
        this.innerHTML = `
            <div div class = "container sticky-top mb-2">
                <div class="row">
                    <div class="col-6 shadow rounded p-3 align-items-center justify-content-center bg-light mt-2 mx-auto">
                        <div class="input-group">
                            <input type="text" id="searchElement" class="form-control" placeholder="Search Meal">
                            <div class="input-group-append">
                                <button class="btn btn-salmon" id="searchButtonElement" type="button">Find Meal</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        `;

        this.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
    }
}

customElements.define('search-bar', SearchBar);