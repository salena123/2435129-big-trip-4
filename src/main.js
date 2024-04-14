import FiltersView from './view/filters-view.js';
import BordPresenter from './presenter/board-presenter.js';
import TripName from './view/trip-name-view.js';
import { render, RenderPosition } from './framework/render.js';
import PointModel from './model/point-model.js';
import OfferModel from './model/offer-model.js';

const tripControlsFilters = document.querySelector('.trip-controls__filters');
const tripEvents = document.querySelector('.trip-events');
const tripMain = document.querySelector('.trip-main');
const bodyElement = document.querySelector('body');

const pointsModel = new PointModel();
const offerModel = new OfferModel();

const bordPresenter = new BordPresenter({
  boardContainer:tripEvents,
  pointsModel,
  offerModel,
  bodyElement: bodyElement,
});

render(new FiltersView(), tripControlsFilters);
render(new TripName(), tripMain, RenderPosition.AFTERBEGIN);

bordPresenter.init();
