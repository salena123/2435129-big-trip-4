import { createSortingElementTemplate } from '../template/sorting-template';
import AbstractView from '../framework/view/abstract-view.js';

export default class SortingView extends AbstractView{
  get template() {
    return createSortingElementTemplate();
  }
}
