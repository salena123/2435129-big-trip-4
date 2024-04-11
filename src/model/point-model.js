import { genOffer } from '../mock/offers';
import { genDestanation } from '../mock/destination';
import { getRandomNumber } from '../utils';
import { getRandomPoint } from '../mock/point';

const POINT_COUNT = 4;

export default class PointModel {
  #points = Array.from({length: POINT_COUNT}, getRandomPoint);
  offers = Array.from({length: getRandomNumber(1, 5)}, genOffer);
  destination = Array.from({length: getRandomNumber(1, 3)}, genDestanation);

  get points() {
    return this.#points;
  }

  getOffers() {
    return this.offers;
  }

  getDestanation() {
    return this.destination;
  }
}
