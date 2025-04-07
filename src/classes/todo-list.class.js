export class TodoList {
  constructor() {
    // this.todos = [];
    this.loadLocalStorage();
  }

  nuevoTodo(todo) {
    this.todos.push(todo);
    this.saveLocalStorage();
  }
  deleteTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id != id);
    this.saveLocalStorage();

    console.log("Todos after deletion:", this.todos);
  }

  toggleTodo(id) {
    for (const todo of this.todos) {
      console.log(id, todo.id);
      if (todo.id == id) {
        todo.completado = !todo.completado;
        this.saveLocalStorage();
        break;
      }
    }
  }
  deleteCompleted() {
    this.todos = this.todos.filter((todo) => !todo.completado);
    this.saveLocalStorage();
  }
  saveLocalStorage() {
    localStorage.setItem("todo", JSON.stringify(this.todos));
  }

  loadLocalStorage() {
    if (localStorage.getItem("todo")) {
      this.todos = JSON.parse(localStorage.getItem("todo"));
      console.log("Todos from local storage:", this.todos);
    } else {
      this.todos = [];
    }
  }
}
