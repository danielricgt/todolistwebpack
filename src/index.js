import { TodoList, Todo } from './classes' 
import './styles.css';

const todoList = new TodoList();
const tarea = new Todo('Comprar leche');
const tarea2 = new Todo('Aprender JS');

todoList.nuevoTodo (tarea);

todoList.nuevoTodo (tarea2);

console.log(todoList);

