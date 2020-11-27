const getTodosFromStorage = () =>
  JSON.parse(window.localStorage.getItem("todos"));

const storeTodosInStorage = (todos) =>
  window.localStorage.setItem("todos", JSON.stringify(todos));

export { getTodosFromStorage, storeTodosInStorage };
