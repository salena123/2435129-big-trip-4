import FormOfCreationView from '../view/form-of-creation-view.js';
import EditFormView from '../view/form-editing-veiw.js';
import PointView from '../view/point-view.js';
import SortingView from '../view/sorting-view.js';
import { render, RenderPosition } from '../framework/render.js';


export default class BordPresenter {
  #boardContainer = null;
  #pointsModel = null;
  #offerModel = null;

  #sortingComponent = new SortingView();
  #formOfCreationComponent = new FormOfCreationView();

  #points = [];
  #offers = [];

  constructor ({boardContainer, pointsModel, offerModel}){
    this.#boardContainer = boardContainer;
    this.#pointsModel = pointsModel;
    this.#offerModel = offerModel;
  }

  init() {
    this.#points = [...this.#pointsModel.points];
    this.#offers = [...this.#offerModel.getOffers()];

    render(this.#sortingComponent, this.#boardContainer, RenderPosition.AFTERBEGIN);
    render(this.#formOfCreationComponent, this.#boardContainer);


    for(let i = 1; i < this.#points.length; i++) {
      render(new PointView({point: this.#points[i]}), this.#formOfCreationComponent.element);
      render(new EditFormView({point: this.#points[i]}), this.#formOfCreationComponent.element);
    }
  }
}
