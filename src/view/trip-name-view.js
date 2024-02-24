import { createTripNameTemplate } from '../template/trip-name-template.js';
import { createElement } from '../render';

export default class TripName {
  getTemplate() {
    return createTripNameTemplate();
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
