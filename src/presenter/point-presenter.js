import {render, replace, remove} from '../framework/render.js';
import PointView from '../view/point-view.js';
import EditFormView from '../view/form-editing-veiw.js';

const Mode = {
  DEFAULT: 'DEFAULT',
  EDITTING: 'EDITTING',
};

export default class PointPresenter {
  #pointListContainer = null;
  #handleDataChange = null;
  #handleModeChange = null;

  #pointComponent = null;
  #pointEditComponent = null;

  #mode = Mode.DEFAULT;
  #point = null;

  constructor({pointListContainer, onDataChange, onModeChange}) {
    this.#pointListContainer = pointListContainer;
    this.#handleDataChange = onDataChange;
    this.#handleModeChange = onModeChange;
  }

  init(point) {
    this.#point = point;

    const prevPointComponent = this.#pointComponent;
    const prevPointEditComponent = this.#pointEditComponent;
    this.#pointComponent = new PointView ({
      point: this.#point,
      onEditClick: this.#handleEditClick,
      onFavoriteClick: this.#handleFavoriteClick,
    });


    this.#pointEditComponent = new EditFormView({
      point: this.#point,
      onFormReset: this.#handleFormClick,
      onFormSubmit: () => {
        //добавить обработчик отправки формы!!!!!!!!!!!!
      },
      onFormSave: this.#handleSaveClick,
    });

    if (prevPointComponent === null || prevPointEditComponent === null) {
      render(this.#pointComponent, this.#pointListContainer);
      return;
    }

    if (this.#mode === Mode.DEFAULT) {
      replace(this.#pointComponent, prevPointComponent);
    }

    if (this.#mode === Mode.EDITTING) {
      replace(this.#pointEditComponent, prevPointEditComponent);
    }

    remove(prevPointComponent);
    remove(prevPointEditComponent);
  }

  destroy() {
    remove(this.#pointComponent);
    remove(this.#pointEditComponent);
  }

  resetView() {
    if (this.#mode !== Mode.DEFAULT) {
      this.#replaceEditToPoint();
    }
  }

  #replacePointToEdit() {
    replace(this.#pointEditComponent, this.#pointComponent);
    document.addEventListener('keydown', this.#escKeyDownHandler);
    this.#handleModeChange();
    this.#mode = Mode.EDITTING;
  }

  #replaceEditToPoint() {
    replace(this.#pointComponent, this.#pointEditComponent);
    document.removeEventListener('keydown', this.#escKeyDownHandler);
    this.#mode = Mode.DEFAULT;
  }

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this.#replaceEditToPoint();
    }
  };

  #handleEditClick = () => {
    this.#replacePointToEdit();
  };

  #handleFormClick = () => {
    this.#replaceEditToPoint();
  };

  #handleSaveClick = () => {
    this.#replaceEditToPoint();
  };

  #handleFavoriteClick = () => {
    this.#handleDataChange({...this.#point, isFavorite: !this.#point.isFavorite});
  };

  #handleFormSubmit = (point) => {
    this.#handleDataChange(point);
    this.#replacePointToEdit();
  };
}

