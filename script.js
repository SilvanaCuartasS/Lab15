import { TodoManager } from './utils.js';

const todoManager = new TodoManager();

function renderTodos() {
  const todoList = document.getElementById('todo-list');
  todoList.innerHTML = '';

  let completedCount = 0;
  let pendingCount = 0;

  todoManager.getTodos().forEach(todo => {
    const div = document.createElement('div');
    div.classList.add('todo-item');
    div.dataset.todoId = todo.id;

    const input = document.createElement('input');
    input.type = 'checkbox';
    input.checked = todo.completed;
    input.addEventListener('change', () => {
      todoManager.toggleTodoCompletion(todo.id);
      renderTodos();
    });

    const label = document.createElement('label');
    label.textContent = todo.title;

    div.appendChild(input);
    div.appendChild(label);
    todoList.appendChild(div);

    if (todo.completed) {
      completedCount++;
    } else {
      pendingCount++;
    }
  });

  document.getElementById('completed-count').textContent = completedCount;
  document.getElementById('pending-count').textContent = pendingCount;
}

const form = document.getElementById('todo-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const todoItems = document.querySelectorAll('.todo-item');
  todoItems.forEach(item => {
    const checkbox = item.querySelector('input[type="checkbox"]');
    const todoId = item.dataset.todoId;
    todoManager.toggleTodoCompletion(parseInt(todoId));
  });
  renderTodos();
});

renderTodos();