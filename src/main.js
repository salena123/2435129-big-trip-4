import FiltersView from './view/filters-view.js';
import EditFormView from './view/form-editing-veiw.js';
import BordPresenter from './presenter/presenter.js';
import TripName from './view/trip-name-view.js';
import { render, RenderPosition } from './render.js';

const tripControlsFilters = document.querySelector('.trip-controls__filters');
const tripEvents = document.querySelector('.trip-events');
const tripMain = document.querySelector('.trip-main');

const bordPresenter = new BordPresenter({
  container:tripEvents
});

render(new FiltersView(), tripControlsFilters);
render(new EditFormView(), tripEvents);
render(new TripName(), tripMain, RenderPosition.AFTERBEGIN);

bordPresenter.init();
