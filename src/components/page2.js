import Http from "../utils/http";
import { storeStateInStorage } from "../utils/storage";

class Page2 {
  constructor() {
    this.page = document.getElementById("page");
  }

  get template() {
    return /*html*/ `
      <div class="page2">
        <h2>Page 2</h2>
        <div class="container"></div>
        <small>The above data was fetched from an external server</small>
        <hr/>
        <h2> state.count: ${this.state.count}</h2>
        <button class="btn">Increment</button>
      </div>
    `;
  }

  init(state) {
    this.state = state;
    this.#render();
    this.state.data ? this.#displayData() : this.#getData();
    this.#addEventListeners();
  }

  #getData() {
    const http = new Http();
    http.setBaseUrl("https://jsonplaceholder.typicode.com");
    try {
      http.get("/posts/1").then((data) => {
        this.state.data = data;
        this.#displayData();
        storeStateInStorage(this.state);
      });
    } catch (error) {
      console.log(error);
    }
  }

  #displayData() {
    const container = document.querySelector(".container");
    container.innerHTML = `
      <p>ID: ${this.state.data.id}</p>
      <p>Title: ${this.state.data.title}</p>
      <p>Body: ${this.state.data.body}</p>
    `;
  }

  #addEventListeners() {
    const btn = document.querySelector(".btn");
    btn.addEventListener("click", (e) => {
      this.state.count++;
      this.#render();
      this.#displayData();
      this.#addEventListeners();
      storeStateInStorage(this.state);
    });
  }

  #render() {
    this.page.innerHTML = this.template;
  }
}

export default new Page2();
