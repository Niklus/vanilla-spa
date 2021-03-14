import { getTodosFromStorage, storeTodosInStorage } from "../utils/storage";

class Page3 {
  constructor() {
    this.page = document.getElementById("page");
  }

  get template() {
    return /*html*/ `
      <div class="page3">
        <h2>Page 3</h2>
        <form>
          <input id="todo" type="text" placeholder="Enter a todo"/>
        </form>
        <div class="todos"></div>
      </div>
    `;
  }

  init(state) {
    this.state = state;
    this.#render();
    this.#getTodos();
    this.#addEventListeners();
  }

  #getTodos() {
    const todos = getTodosFromStorage() || [];
    this.#displayTodos(todos);
  }

  #addEventListeners() {
    this.#addFormListener();
    this.#addButtonsListener();
  }

  #addFormListener() {
    const form = document.querySelector("form");
    const todo = document.getElementById("todo");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (todo.value) {
        this.#addToStorage({
          todo: todo.value,
          completed: false,
        });
        todo.value = "";
      }
    });
  }

  #addButtonsListener() {
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
      button.addEventListener("click", (e) => {
        this.#removeFromStorage(e.target.id);
      });
    });
  }

  #addToStorage(todo) {
    const todos = getTodosFromStorage() || [];
    todos.push(todo);
    storeTodosInStorage(todos);
    this.#getTodos();
    this.#addButtonsListener();
  }

  #removeFromStorage(id) {
    const todos = getTodosFromStorage();
    if (todos) {
      todos.splice(id, 1);
      storeTodosInStorage(todos);
      this.#getTodos();
      this.#addButtonsListener();
    }
  }

  #displayTodos(todos) {
    const todosContainer = document.querySelector(".todos");
    if (todos.length > 0) {
      let htmlStr = "";
      todos.forEach((todo, index) => {
        htmlStr += /*html*/ `
          <div style="width:600px; margin: 10px auto;">
            <hr/>
            <div
              style="display:flex; justify-content: space-between"
            >${todo.todo} <button id=${index}>delete</button>
            </div>
          </div>
          `;
      });
      todosContainer.innerHTML = htmlStr;
    } else {
      todosContainer.innerHTML = "";
    }
  }

  #render() {
    this.page.innerHTML = this.template;
  }
}

export default new Page3();
