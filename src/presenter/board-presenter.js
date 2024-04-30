import FormOfCreationView from '../view/form-of-creation-view.js';
import PointPresenter from './point-presenter.js';
import SortingView from '../view/sorting-view.js';
import { render, RenderPosition} from '../framework/render.js';
import EmptyList from '../view/empty-list-view.js';
import { updateItem } from '../utils/common.js';

export default class BordPresenter {
  #boardContainer = null;
  #pointsModel = null;
  #offerModel = null;
  #bodyElement = null;

  #sortingComponent = new SortingView();
  #formOfCreationComponent = new FormOfCreationView();
  #noPointComponent = new EmptyList();
  #boardPoints = [];
  #offers = [];
  #pointPresenters = new Map();

  constructor ({boardContainer, pointsModel, offerModel, bodyElement}){
    this.#boardContainer = boardContainer;
    this.#pointsModel = pointsModel;
    this.#offerModel = offerModel;
    this.#bodyElement = bodyElement;
  }

  init() {
    this.#boardPoints = [...this.#pointsModel.points];
    this.#offers = [...this.#offerModel.offers];

    if (this.#boardPoints.length === 0) {
      this.#renderNoPoints();
    } else {
      this.#renderBoard();
    }
    this.#renderSort();
  }

  #handleModeChane = () => {
    this.#pointPresenters.forEach((presenter) => presenter.resetView());
  };

  #renderPoint(point) {
    const pointPresenter = new PointPresenter({
      pointListContainer: this.#formOfCreationComponent.element,
      onDataChange: this.#handlePointChange,
      onModeChange: this.#handleModeChane
    });
    pointPresenter.init(point);
    this.#pointPresenters.set(point.id, pointPresenter);
  }


  #renderPoints(from, to) {
    this.#boardPoints.slice(from, to).forEach((point) => this.#renderPoint(point));
  }

  #renderNoPoints() {
    render(this.#noPointComponent, this.#boardContainer, RenderPosition.AFTERBEGIN);
  }

  #handlePointChange = (updatedPoint) => {
    this.#boardContainer = updateItem(this.#boardPoints, updatedPoint);
    this.#pointPresenters.get(updatedPoint.id).init(updatedPoint);
  };

  #renderSort() {
    render(this.#sortingComponent, this.#boardContainer, RenderPosition.AFTERBEGIN);
  }

  #clearPoinList() {
    this.#pointPresenters.forEach((presenter) => presenter.destroy());
    this.#pointPresenters.clear();
  }

  #renderBoard() {

    render(this.#formOfCreationComponent, this.#boardContainer);

    for(let i = 0; i < this.#boardPoints.length; i++) {
      this.#renderPoint(this.#boardPoints[i]);
    }
  }
}
