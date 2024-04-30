import FormOfCreationView from '../view/form-of-creation-view.js';
import PointPresenter from './point-presenter.js';
import SortingView from '../view/sorting-view.js';
import { render, replace, RenderPosition, remove} from '../framework/render.js';
import EmptyList from '../view/empty-list-view.js';
import { updateItem } from '../utils/common.js';
import { SortType } from '../const.js';
import { sortTime, sortPrice, sortDay } from '../utils/point-utils.js';
// import { sort} from '../utils/sort.js';

export default class BordPresenter {
  #boardContainer = null;
  #pointsModel = null;
  #offerModel = null;

  #sortingComponent = null;
  #eventListComponent = null;
  #noPointComponent = new EmptyList();
  #boardPoints = [];
  #pointPresenters = new Map();
  #currentSortType = SortType.DAY;
  #sourceBoardPoints = [];

  constructor ({boardContainer, pointsModel}){
    this.#boardContainer = boardContainer;
    this.#pointsModel = pointsModel;
  }

  init() {
    this.#boardPoints = [...this.#pointsModel.points].sort(sortDay);
    this.#sourceBoardPoints = [...this.#pointsModel.points];
    this.#renderBoard();
  }

  #handleModeChane = () => {
    this.#pointPresenters.forEach((presenter) => presenter.resetView());
  };

  #renderPoint(point) {
    const pointPresenter = new PointPresenter({
      pointListContainer: this.#eventListComponent.element,
      onDataChange: this.#handlePointChange,
      onModeChange: this.#handleModeChane
    });
    pointPresenter.init(point);
    this.#pointPresenters.set(point.id, pointPresenter);
  }


  #renderPoints = () => {
    this.#boardPoints.forEach((point) => {
      this.#renderPoint(point);
    });
  };

  #renderNoPoints() {
    render(this.#noPointComponent, this.#boardContainer, RenderPosition.AFTERBEGIN);
  }

  #handlePointChange = (updatedPoint) => {
    this.#boardContainer = updateItem(this.#boardPoints, updatedPoint);
    this.#sourceBoardPoints = updateItem(this.#sourceBoardPoints, updateItem);
    this.#pointPresenters.get(updatedPoint.id).init(updatedPoint);
  };

  #sortPoints(sortType) {
    switch(sortType) {
      case SortType.TIME:
        this.#boardPoints.sort(sortTime);
        break;
      case SortType.PRICE:
        this.#boardPoints.sort(sortPrice);
        break;
      case SortType.DAY:
        this.#boardPoints.sort(sortDay);
        break;
    }

    this.#currentSortType = sortType;
  }

  #handleSortTypeChange = (sortType) => {
    if (this.#currentSortType === sortType) {
      return;
    }

    this.#sortPoints(sortType);
    this.#clearPoinList();
    this.#renderSort();
    this.#renderPoints();
  };

  #renderSort() {
    const prevSortComponent = this.#sortingComponent;

    this.#sortingComponent = new SortingView({
      type: this.#currentSortType,
      onSortTypeChange: this.#handleSortTypeChange,
    });

    if (prevSortComponent) {
      replace(this.#sortingComponent, prevSortComponent);
      remove(prevSortComponent);
    } else {
      render(this.#sortingComponent, this.#boardContainer, RenderPosition.AFTERBEGIN);
    }
  }

  #clearPoinList() {
    this.#pointPresenters.forEach((presenter) => presenter.destroy());
    this.#pointPresenters.clear();
  }

  #rendereventListContainer = () => {
    this.#eventListComponent = new FormOfCreationView();
    render(this.#eventListComponent, this.#boardContainer);
  };

  #renderBoard() {

    if (this.#boardPoints.length === 0) {
      this.#renderNoPoints();
      return;
    }
    this.#renderSort();
    this.#rendereventListContainer();
    this.#renderPoints();
  }
}
