import FormOfCreationView from '../view/form-of-creation-view.js';
import EditFormView from '../view/form-editing-veiw.js';
import PointView from '../view/point-view.js';
import SortingView from '../view/sorting-view.js';
import { render, RenderPosition } from '../render.js';

export default class BordPresenter {
  sortingComponent = new SortingView();
  formOfCreationComponent = new FormOfCreationView();

  constructor ({container, pointsModel, offerModel}){
    this.container = container;
    this.pointsModel = pointsModel;
    this.offerModel = offerModel;
  }

  init() {
    this.points = [...this.pointsModel.getPoints()];
    this.offers = [...this.offerModel.getOffers()];

    render(this.sortingComponent, this.container, RenderPosition.AFTERBEGIN);
    render(this.formOfCreationComponent, this.container);
    render(new EditFormView(), this.formOfCreationComponent.getElement());

    for(let i = 1; i < this.points.length; i++) {
      render(new PointView({point: this.points[i]}), this.formOfCreationComponent.getElement());

    }
  }
}
