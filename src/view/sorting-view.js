import { createElement } from '../render';
import { createSortingElementTemplate } from '../template/sorting-template';

export default class SortingView {
  getTemplate() {
    return createSortingElementTemplate();
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
