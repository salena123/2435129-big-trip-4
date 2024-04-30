import { createSortingElementTemplate } from '../template/sorting-template';
import AbstractView from '../framework/view/abstract-view.js';

export default class SortingView extends AbstractView{
  #handleSortTypeChange = null;
  #type = null;

  constructor({onSortTypeChange, type}) {
    super();
    this.#handleSortTypeChange = onSortTypeChange;
    this.#type = type;
    this.element.addEventListener('click', this.#sortTypeChangeHandler);

  }

  get template() {
    return createSortingElementTemplate(this.#type);
  }

  #sortTypeChangeHandler = (evt) => {
    if(evt.target.tagName !== 'INPUT') {
      return;
    }
    evt.preventDefault();
    this.#handleSortTypeChange(evt.target.dataset.sortType);
  };
}
