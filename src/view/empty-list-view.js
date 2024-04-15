import { createEmptyListTemplate } from '../template/empty-list-template.js';
import AbstractView from '../framework/view/abstract-view.js';

export default class EmptyList extends AbstractView {
  get template() {
    return createEmptyListTemplate();
  }
}
