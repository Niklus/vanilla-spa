class Header {
  template() {
    return /*html*/ `
      <header>
        <h2 class="title">LOGO</h2>
        <a href="#page1">Page 1<a> |
        <a href="#page2">Page 2<a> |
        <a href="#page3">Page 3<a>
      </header>
    `;
  }

  init(state) {
    this.state = state;
    this.#render();
  }

  #render() {
    this.header = document.getElementById("header");
    this.header.innerHTML = this.template();
  }
}

export default new Header();
