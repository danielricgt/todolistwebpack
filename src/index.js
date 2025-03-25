import { TodoList, Todo } from './classes' 
import { crearTodoHTML } from './js/componentes';
import './styles.css';

export const todoList = new TodoList();
const tarea = new Todo('Comprar leche');
todoList.nuevoTodo(tarea);
tarea.completado = true;

console.log(todoList);

 crearTodoHTML(tarea);