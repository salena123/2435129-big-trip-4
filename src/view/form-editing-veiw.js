import { createEditFormElementTemplate, BLANK_POINT } from '../template/form-editing-template';
import AbstractView from '../framework/view/abstract-view.js';

export default class EditFormView extends AbstractView {
  #point = null;
  #handlerFormSubmit = null;
  #handlerFormReset = null;
  #handlerFormSave = null;

  constructor({point = BLANK_POINT, onFormSubmit, onFormReset, onFormSave}) {
    super();
    this.#point = point;
    this.#handlerFormSubmit = onFormSubmit;
    this.#handlerFormReset = onFormReset;
    this.#handlerFormSave = onFormSave;

    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#formResetHandler);
    this.element.querySelector('form').addEventListener('submit', this.#formSubmitHandler);
    this.element.querySelector('.event__save-btn').addEventListener('click', this.#formSaveHandler);
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

  #formSaveHandler = (evt) => {
    evt.preventDefault();
    this.#handlerFormSave();
  };
}
