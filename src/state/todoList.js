import { makeObservable, computed, observable, action } from "mobx";
import { ToDo } from "./todo";
export class ToDoList {
  todos = [];

  get unfinsihedTodos() {
    return this.todos.filter((todo) => !todo.finished).length;
  }

  newToDo(options) {
    this.todos.push(new ToDo(options));
  }

  removeToDo(id) {
    this.todos = this.todos.filter((todo) => id !== todo.id);
  }

  editToDo(id, newOptions) {
    let index = this.todos.findIndex((todo) => id === todo.id);
    this.todos[index] = { ...this.todos[index], ...newOptions };
  }

  constructor(todos) {
    makeObservable(this, {
      todos: observable,
      unfinsihedTodos: computed,
      newToDo: action,
      removeToDo: action,
      editToDo: action,
    });
    this.todos = todos;
    this.removeToDo = this.removeToDo.bind(this);
  }
}
