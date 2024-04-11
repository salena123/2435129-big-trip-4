import { createEditFormElementTemplate, BLANK_POINT } from '../template/form-editing-template';
import AbstractView from '../framework/view/abstract-view.js';

export default class EditFormView extends AbstractView{
  #point = null;

  constructor({point}) {
    super();
    this.#point = point;
  }

  get template() {
    return createEditFormElementTemplate(this.#point);
  }
}
