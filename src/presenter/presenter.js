import FormOfCreationView from '../view/form-of-creation-view.js';
import PointView from '../view/point-view.js';
import SortingView from '../view/sorting-view.js';
import { render, RenderPosition } from '../render.js';

export default class BordPresenter {
  sortingComponent = new SortingView();
  formOfCreationComponent = new FormOfCreationView();

  constructor ({container, pointsModel}){
    this.container = container;
    this.pointsModel = pointsModel;
  }

  init() {
    this.points = [...this.pointsModel.getPoints()];

    render(this.sortingComponent, this.container, RenderPosition.AFTERBEGIN);
    render(this.formOfCreationComponent, this.container);

    for(let i = 0; i < this.points.length; i++) {
      render(new PointView({point: this.points[i]}), this.formOfCreationComponent.getElement());
    }
  }
}
