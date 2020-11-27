const page1 = {
  template: `<div class="page1">
      <h2>Page 1</h2>
      <img src="img/spa-benefits.png"/> <br/>
      <button class="btn">Click Me</button>
    </div>`,

  // Public Method
  addEventListeners() {
    const btn = document.querySelector(".btn");
    btn.addEventListener("click", (e) => {
      this._greet();
    });
  },

  // Private Method
  _greet() {
    alert("Hello World");
  },
};

export default page1;
