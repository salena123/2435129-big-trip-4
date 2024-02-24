import { createElement } from '../render';
import { createFilterElementTemplate } from '../template/filters-template';

export default class FiltersView {
  getTemplate() {
    return createFilterElementTemplate();
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
