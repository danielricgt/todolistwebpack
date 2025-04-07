import { TodoList, Todo } from "./classes";
import { crearTodoHTML } from "./js/componentes";
import "./styles.css";

export const todoList = new TodoList();

todoList.todos.forEach(crearTodoHTML);
todoList.todos[0].printClass();
