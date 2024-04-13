import FormOfCreationView from '../view/form-of-creation-view.js';
import EditFormView from '../view/form-editing-veiw.js';
import PointView from '../view/point-view.js';
import SortingView from '../view/sorting-view.js';
import { render, RenderPosition, replace } from '../framework/render.js';


export default class BordPresenter {
  #boardContainer = null;
  #pointsModel = null;
  #offerModel = null;

  #sortingComponent = new SortingView();
  #formOfCreationComponent = new FormOfCreationView();

  #boardPoints = [];
  #offers = [];

  constructor ({boardContainer, pointsModel, offerModel}){
    this.#boardContainer = boardContainer;
    this.#pointsModel = pointsModel;
    this.#offerModel = offerModel;
  }

  init() {
    this.#boardPoints = [...this.#pointsModel.points];
    this.#offers = [...this.#offerModel.getOffers()];

    this.#renderBoard();
  }

  #renderPoint(point) {
    const escKeyDownHadler = (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        replaceEditToPoint();
        document.removeEventListener('keydown', escKeyDownHadler);
      }
    };

    const pointComponent = new PointView({
      point,
      onEditClick: () => {
        replacePointToEdit();
        document.addEventListener('keydown', escKeyDownHadler);
      }
    });

    const pointEditComponent = new EditFormView({
      point,
      onFormReset: () => {
        replaceEditToPoint();
        document.removeEventListener('keydown', escKeyDownHadler);
      },
      onFormSubmit: () => {

      }
    });

    function replacePointToEdit() {
      replace(pointEditComponent, pointComponent);
    }

    function replaceEditToPoint() {
      replace(pointComponent, pointEditComponent);
    }

    render(pointComponent, this.#formOfCreationComponent.element);
  }

  #renderBoard() {
    render(this.#sortingComponent, this.#boardContainer, RenderPosition.AFTERBEGIN);
    render(this.#formOfCreationComponent, this.#boardContainer);


    for(let i = 0; i < this.#boardPoints.length; i++) {
      this.#renderPoint(this.#boardPoints[i]);

    }
  }
}
