import Http from "../utils/http";

const page2 = {
  template: `<div class="page2">
      <h2>Page 2</h2>
      <div class="container"></div>
      <small>The above data was fetched from an external server</small>
    </div>`,

  init() {
    this._getData();
  },

  _getData() {
    const http = new Http();
    http.setBaseUrl("https://jsonplaceholder.typicode.com");
    try {
      http.get("/posts/1").then((data) => {
        this._render(data);
      });
    } catch (error) {
      console.log(error);
    }
  },

  _render(data) {
    const container = document.querySelector(".container");
    container.innerHTML = `
      <p>ID: ${data.id}</p>
      <p>Title: ${data.title}</p>
      <p>Body: ${data.body}</p>
    `;
  },
};

export default page2;
