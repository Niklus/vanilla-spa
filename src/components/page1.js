class Page1 {
  constructor() {
    this.page = document.getElementById("page");
  }

  get template() {
    return /*html*/ `
      <div class="page1">
        <h2>Page 1</h2>
        <img src="img/spa-benefits.png" alt="spa benefits"/> <br/>
        <hr/>
        <h2> state.count: ${this.state.count}</h2>
        <button class="btn">Increment</button>
      </div>
    `;
  }

  init(state) {
    this.state = state;
    this.#render();
    this.#addEventListeners();
  }

  #addEventListeners() {
    const btn = document.querySelector(".btn");
    btn.addEventListener("click", (e) => {
      this.state.count++;
      this.#render();
      this.#addEventListeners();
    });
  }

  #render() {
    this.page.innerHTML = this.template;
  }
}

export default new Page1();
