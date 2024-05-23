import { TodoManager } from './utils.js';

const todoManager = new TodoManager();
const form = document.getElementById('add-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const todoTitle = formData.get('todo-title');
  const newTodo = todoManager.addTodo(todoTitle);
  form.reset();
  document.getElementById('message').textContent = 'TODO guardado correctamente';
});