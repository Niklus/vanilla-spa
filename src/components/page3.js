import { getTodosFromStorage, storeTodosInStorage } from "../utils/storage";

class Page3 {
  template = /*html*/ `
    <div class="page3">
      <h2>Page 3</h2>
      <form>
        <input id="todo" type="text" placeholder="enter a todo"/>
      </form>
      <ol class="todos"></ol>
    </div>`;

  init() {
    this.#getTodos();
    this.#addEventListeners();
  }

  #getTodos() {
    const todos = getTodosFromStorage() || [];
    this.#displayTodos(todos);
  }

  #addEventListeners() {
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
    this.init();
  }

  #removeFromStorage(id) {
    const todos = getTodosFromStorage();
    if (todos) {
      todos.splice(id, 1);
      storeTodosInStorage(todos);
      this.init();
    }
  }

  #displayTodos(todos) {
    const todosContainer = document.querySelector(".todos");
    if (todos.length > 0) {
      let htmlStr = "";
      todos.forEach((todo, index) => {
        htmlStr += `<li>${todo.todo}_<button id=${index}>X</button></li>`;
      });
      todosContainer.innerHTML = htmlStr;
    } else {
      todosContainer.innerHTML = "";
    }
  }
}

export default new Page3();
