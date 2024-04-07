import { createElement } from '../render';
import { createEditFormElementTemplate, BLANK_POINT } from '../template/form-editing-template';

export default class EditFormView {
  constructor(point = BLANK_POINT) {
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
