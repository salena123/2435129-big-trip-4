import { createElement } from '../render';
import { createFormOfCreateTemplate } from '../template/form-of-creation-template';

export default class FormOfCreationView {
  getTemplate() {
    return createFormOfCreateTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
