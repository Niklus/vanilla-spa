class Page1 {
  template = /*html*/ `
    <div class="page1">
      <h2>Page 1</h2>
      <img src="img/spa-benefits.png"/> <br/>
      <button class="btn">Click Me</button>
    </div>`;

  init() {
    this.#addEventListeners();
  }

  #addEventListeners() {
    const btn = document.querySelector(".btn");
    btn.addEventListener("click", (e) => {
      this.#greet();
    });
  }

  #greet() {
    alert("Hello World");
  }
}

export default new Page1();
