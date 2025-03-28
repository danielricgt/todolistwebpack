export class TodoList {
  constructor() {
    this.todos = [];
  }

  nuevoTodo(todo) {
    this.todos.push(todo);
  }
  deleteTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id != id);

    console.log("Todos after deletion:", this.todos);
  }

  toggleTodo(id) {
    for (const todo of this.todos) {
      console.log(id, todo.id);
      if (todo.id == id) {
        todo.completado = !todo.completado;
        break;
      }
    }
  }
}
