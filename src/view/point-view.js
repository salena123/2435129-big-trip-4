import { createPointTemplate } from '../template/point-template';
import AbstractView from '../framework/view/abstract-view.js';

export default class PointView extends AbstractView {
  #point = null;
  #offers = null;
  #destinations = null;

  #handleEditClick = null;
  #handleFavoriteClick = null;

  constructor({point, pointOffers, pointDestinations, onEditClick, onFavoriteClick}) {
    super();
    this.#point = point;
    this.#offers = pointOffers;
    this.#destinations = pointDestinations;
    this.#handleEditClick = onEditClick;
    this.#handleFavoriteClick = onFavoriteClick;

    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#editClickHandler);
    this.element.querySelector('.event__favorite-btn').addEventListener('click', this.#favoriteClickHandler);
  }

  get template() {
    return createPointTemplate(
      this.#point,
      this.#offers,
      this.#destinations,
    );
  }

  #editClickHandler = (evt) => {
    evt.preventDefault();
    this.#handleEditClick();
  };

  #favoriteClickHandler = (evt) => {
    evt.preventDefault();
    this.#handleFavoriteClick();
  };
}
