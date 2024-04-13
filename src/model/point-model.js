import { genOffer } from '../mock/offers-mock';
import { genDestanation } from '../mock/destination-mock';
import { getRandomNumber } from '../utils/common.js';
import { getRandomPoint } from '../mock/point-mock';

const POINT_COUNT = 4;

export default class PointModel {
  #points = Array.from({length: POINT_COUNT}, getRandomPoint);
  #offers = Array.from({length: getRandomNumber(1, 5)}, genOffer);
  #destination = Array.from({length: getRandomNumber(1, 3)}, genDestanation);

  get points() {
    return this.#points;
  }

  get offers() {
    return this.#offers;
  }

  get destanation() {
    return this.#destination;
  }
}
