import { createFormOfCreateTemplate } from '../template/form-of-creation-template';
import AbstractView from '../framework/view/abstract-view.js';

export default class FormOfCreationView extends AbstractView{
  get template() {
    return createFormOfCreateTemplate();
  }
}
