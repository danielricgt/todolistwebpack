import { Todo } from "../classes";
import { todoList } from "../index";
const divTodolist = document.querySelector(".todo-list");
const txtInput = document.querySelector(".new-todo");
export const crearTodoHTML = (todo) => {
  const htmlTodo = `
    <li class="${todo.completado ? "completed" : ""}" data-id="${todo.id}">
      <div class="view">
        <input class="toggle" type="checkbox" ${todo.completado ? "checked" : ""}>
        <label>${todo.tarea}</label>
        <button class="destroy"></button>
      </div>
      <input class="edit" value="Create a TodoMVC template">
    </li>
  `;
  const div = document.createElement("div");
  div.innerHTML = htmlTodo;
  divTodolist.append(div.firstElementChild);
  return div.firstElementChild;
};

// Eventos

txtInput.addEventListener("keyup", (event) => {
  if (event.keyCode === 13 && txtInput.value.length > 0) {
    console.log(txtInput.value);
    const nuevoTodo = new Todo(txtInput.value);
    todoList.nuevoTodo(nuevoTodo);
    console.log(todoList);
    crearTodoHTML(nuevoTodo);
    txtInput.value = "";
  }
});

divTodolist.addEventListener("click", (event) => {
  const nombreElemento = event.target.localName; //input, label or button
  const todoElemento = event.target.parentElement.parentElement;
  const todoId = todoElemento.getAttribute("data-id");

  console.log(nombreElemento);  

  // Verifica que el elemento está correctamente seleccionado

// Verifica el estado inicial de las clases del elemento

  if (nombreElemento.includes('input')) {
    todoList.toggleTodo(todoId);
    todoElemento.classList.toggle('completed'); }
  else if (nombreElemento.includes('button')){
    console.log('entrando a button ');
    todoList.deleteTodo(todoId);
    divTodolist.removeChild(todoElemento);

  }
  console.log(todoList);
});
