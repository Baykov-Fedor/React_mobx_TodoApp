import { makeObservable, action, observable } from "mobx";

export class ToDo {
  id = Math.random();
  title = "";
  finished = false;
  description = "";
  date = "";
  important = false;

  constructor({ title, description, important, date }) {
    makeObservable(this, {
      id: observable,
      title: observable,
      finished: observable,
      description: observable,
      date: observable,
      important: observable,
      toggle: action,
    });
    this.title = title;
    this.description = description;
    this.important = important;
    this.date = date;
  }

  toggle() {
    this.finished = !this.finished;
  }
}
