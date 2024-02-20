import FiltersView from './view/filters-view.js';
import EditFormView from './view/form-editing-veiw.js';
import BordPresenter from './presenter/presenter.js';
import { render, RenderPosition } from './render.js';

const tripControlsFilters = document.querySelector('.trip-controls__filters');
const tripEvents = document.querySelector('.trip-events');

const bordPresenter = new BordPresenter({
  container:tripEvents
});

render(new FiltersView(), tripControlsFilters, RenderPosition.AFTERBEGIN);
render(new EditFormView(), tripEvents);

bordPresenter.init();
