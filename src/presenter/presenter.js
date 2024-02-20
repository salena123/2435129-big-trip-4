import FormOfCreationView from '../view/form-of-creation-view.js';
import PointView from '../view/point-view.js';
import SortingView from '../view/sorting-view.js';
import { render } from '../render.js';

export default class BordPresenter {
  sortingComponent = new SortingView();
  formOfCreationComponent = new FormOfCreationView();

  constructor ({container}){
    this.container = container;
  }

  init() {
    render(this.sortingComponent, this.container);
    render(this.formOfCreationComponent, this.container);

    render(new PointView(), this.formOfCreationComponent.getElement());

    for(let i = 0; i < 3; i++) {
      render(new PointView(), this.formOfCreationComponent.getElement());
    }
  }
}
