import { createFilterElementTemplate } from '../template/filters-template';
import AbstractView from '../framework/view/abstract-view.js';

export default class FiltersView extends AbstractView {
  get template() {
    return createFilterElementTemplate();
  }
}
