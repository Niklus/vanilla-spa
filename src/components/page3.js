import { getTodosFromStorage, storeTodosInStorage } from "../utils/storage";

class Page3 {
  template() {
    return `<div class="page3">
      <h2>Page 3</h2>
      <form>
        <input id="todo" type="text" placeholder="enter a todo"/>
        <ol class="todos"></ol>
      </form>
    </div>`;
  }

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
  }

  #addToStorage(todo) {
    const todos = getTodosFromStorage() || [];
    todos.push(todo);
    storeTodosInStorage(todos);
    this.#displayTodos(todos);
  }

  #displayTodos(todos) {
    if (todos.length > 0) {
      const todosContainer = document.querySelector(".todos");
      let htmlStr = "";
      for (const todo of todos) {
        htmlStr += `<li>${todo.todo}</li>`;
      }
      todosContainer.innerHTML = htmlStr;
    }
  }
}

export default new Page3();
