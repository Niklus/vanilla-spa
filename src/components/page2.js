import Http from "../utils/http";

class Page2 {
  template = /*html*/ `
    <div class="page2">
      <h2>Page 2</h2>
      <div class="container"></div>
      <small>The above data was fetched from an external server</small>
    </div>`;

  init() {
    this.#getData();
  }

  #getData() {
    const http = new Http();
    http.setBaseUrl("https://jsonplaceholder.typicode.com");
    try {
      http.get("/posts/1").then((data) => {
        this.#render(data);
      });
    } catch (error) {
      console.log(error);
    }
  }

  #render(data) {
    const container = document.querySelector(".container");
    container.innerHTML = `
      <p>ID: ${data.id}</p>
      <p>Title: ${data.title}</p>
      <p>Body: ${data.body}</p>
    `;
  }
}

export default new Page2();
