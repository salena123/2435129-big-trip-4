import { createElement } from '../render';
import { createEditFormElementTemplate } from '../template/form-editing-template';

export default class EditFormView {
  constructor(point) {
    this.point = point;

  }

  getTemplate() {
    return createEditFormElementTemplate(this.point);
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
