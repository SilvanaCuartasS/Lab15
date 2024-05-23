export class TodoManager {
  constructor() {
    this.todos = this.loadTodos();
  }

  loadTodos() {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    return todos;
  }

  saveTodos() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  addTodo(title) {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false
    };
    this.todos.push(newTodo);
    this.saveTodos();
    return newTodo;
  }

  toggleTodoCompletion(todoId) {
    const todo = this.todos.find(t => t.id === todoId);
    if (todo) {
      todo.completed = !todo.completed;
      this.saveTodos();
    }
  }
  getTodos() {
      return [...this.todos];
    }
}
