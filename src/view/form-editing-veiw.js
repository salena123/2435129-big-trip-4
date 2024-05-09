import { createEditFormElementTemplate, BLANK_POINT } from '../template/form-editing-template';
import AbstractStatefulView from '../framework/view/abstract-stateful-view.js';

export default class EditFormView extends AbstractStatefulView {
  #point = null;
  #offers = null;
  #destinations = null;

  #handlerFormSubmit = null;
  #handlerFormReset = null;
  #handlerFormSave = null;

  constructor({point = BLANK_POINT, offers, destination, onFormSubmit, onFormReset, onFormSave}) {
    super();
    this.#point = point;
    this.#offers = offers;
    this.#destinations = destination;
    this.#handlerFormSubmit = onFormSubmit;
    this.#handlerFormReset = onFormReset;
    this.#handlerFormSave = onFormSave;

    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#formResetHandler);
    this.element.querySelector('form').addEventListener('submit', this.#formSubmitHandler);
    this.element.querySelector('.event__save-btn').addEventListener('click', this.#formSaveHandler);
  }

  get template() {
    return createEditFormElementTemplate(
      this.#point,
      this.#offers,
      this.#destinations,
    );
  }

  #formSubmitHandler = (evt) => {
    evt.preventDefault();
    this.#handlerFormSubmit(this.#point);
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
