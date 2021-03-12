import { ToDo } from "./todo";
import { ToDoList } from "./todoList";
import { Modal } from "./modal";

const todos = [
  new ToDo({
    title: "Brush teeth",
    description: "On the morning brush my teeth",
    importance: true,
    date: "",
  }),
  new ToDo({
    title: "Cook a breakfast",
    description: "Delicious eggs with toast",
    importance: true,
    date: "",
  }),
  new ToDo({
    title: "Watch a serial",
    description: "New series of my favorite show",
    importance: false,
    date: "",
  }),
];

export const AppState = { toDoList: new ToDoList(todos), modal: new Modal() };
