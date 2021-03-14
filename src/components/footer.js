class Footer {
  template() {
    return /*html*/ `
      <footer>
        <h3>Footer</h3>
      </footer>
    `;
  }

  init(state) {
    this.state = state;
    this.#render();
  }

  #render() {
    this.footer = document.getElementById("footer");
    this.footer.innerHTML = this.template();
  }
}

export default new Footer();
