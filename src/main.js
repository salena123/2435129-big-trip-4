import FiltersView from './view/filters-view.js';
import BordPresenter from './presenter/board-presenter.js';
import TripName from './view/trip-name-view.js';
import { render, RenderPosition } from './framework/render.js';
import PointModel from './model/point-model.js';
import OfferModel from './model/offer-model.js';
import DestinationModel from './model/destination-model.js';
import MockService from './service/mock-service.js';

const tripControlsFilters = document.querySelector('.trip-controls__filters');
const tripEvents = document.querySelector('.trip-events');
const tripMain = document.querySelector('.trip-main');
const bodyElement = document.querySelector('body');

const mockService = new MockService();
const pointsModel = new PointModel(mockService);
const offerModel = new OfferModel(mockService);
const destinationModel = new DestinationModel(mockService);
const bordPresenter = new BordPresenter({
  boardContainer:tripEvents,
  pointsModel,
  offerModel,
  destinationModel,
  bodyElement: bodyElement,
});

render(new FiltersView(), tripControlsFilters);
render(new TripName(), tripMain, RenderPosition.AFTERBEGIN);

bordPresenter.init();
