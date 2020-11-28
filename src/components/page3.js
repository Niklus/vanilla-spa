import { getTodosFromStorage, storeTodosInStorage } from "../utils/storage";

const page3 = {
  template: () =>
    `<div class="page3">
      <h2>Page 3</h2>
      <form>
        <input id="todo" type="text" placeholder="enter a todo"/>
        <ol class="todos"></ol>
      </form>
    </div>`,

  init() {
    this._getTodos();
    this._addEventListeners();
  },

  _getTodos() {
    const todos = getTodosFromStorage() || [];
    this._displayTodos(todos);
  },

  _addEventListeners() {
    const form = document.querySelector("form");
    const todo = document.getElementById("todo");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (todo.value) {
        this._addToStorage({
          todo: todo.value,
          completed: false,
        });
        todo.value = "";
      }
    });
  },

  _addToStorage(todo) {
    const todos = getTodosFromStorage() || [];
    todos.push(todo);
    storeTodosInStorage(todos);
    this._displayTodos(todos);
  },

  _displayTodos(todos) {
    if (todos.length > 0) {
      const todosContainer = document.querySelector(".todos");
      let htmlStr = "";
      for (const todo of todos) {
        htmlStr += `<li>${todo.todo}</li>`;
      }
      todosContainer.innerHTML = htmlStr;
    }
  },
};

export default page3;
