import FiltersView from './view/filters-view.js';
import BordPresenter from './presenter/presenter.js';
import TripName from './view/trip-name-view.js';
import { render, RenderPosition } from './render.js';
import PointModel from './model/point-model.js';
import OfferModel from './model/offer-model.js';

const tripControlsFilters = document.querySelector('.trip-controls__filters');
const tripEvents = document.querySelector('.trip-events');
const tripMain = document.querySelector('.trip-main');

const pointsModel = new PointModel();
const offerModel = new OfferModel();

const bordPresenter = new BordPresenter({
  container:tripEvents,
  pointsModel,
  offerModel,
});

render(new FiltersView(), tripControlsFilters);
render(new TripName(), tripMain, RenderPosition.AFTERBEGIN);

bordPresenter.init();
