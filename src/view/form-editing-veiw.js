import { createEditFormElementTemplate, BLANK_POINT } from '../template/form-editing-template';
import AbstractView from '../framework/view/abstract-view.js';

export default class EditFormView extends AbstractView {
  #point = null;
  #handlerFormSubmit = null;
  #handlerFormReset = null;

  constructor({point = BLANK_POINT, onFormSubmit, onFormReset}) {
    super();
    this.#point = point;
    this.#handlerFormSubmit = onFormSubmit;
    this.#handlerFormReset = onFormReset;

    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#formResetHandler);
    this.element.querySelector('form').addEventListener('submit', this.#formSubmitHandler);
  }

  get template() {
    return createEditFormElementTemplate(this.#point);
  }

  #formSubmitHandler = (evt) => {
    evt.preventDefault();
    this.#handlerFormSubmit();
  };

  #formResetHandler = (evt) => {
    evt.preventDefault();
    this.#handlerFormReset();
  };
}
