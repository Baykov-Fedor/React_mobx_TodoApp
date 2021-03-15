import { makeObservable, action, observable } from "mobx";

export class Modal {
  isOpened = false;
  id = null;

  constructor() {
    makeObservable(this, {
      isOpened: observable,
      id: observable,
      openModal: action,
      closeModal: action,
    });
  }

  openModal(id = null) {
    this.isOpened = true;
    this.id = id;
  }

  closeModal() {
    this.isOpened = false;
  }
}
