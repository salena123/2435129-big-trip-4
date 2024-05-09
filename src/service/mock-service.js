import { getRandomPoint } from '../mock/point-mock';
import { mockOffers } from '../mock/offers-mock';
import { mockDestinations } from '../mock/destination-mock';
import { getRandomArrayElement, getRandomNumber } from '../utils/common';
import { TYPE_OF_POINT, CITIES } from '../const';

const POINT_COUNT = 4;

export default class MockService {
  #points = null;
  #offers = null;
  #destinations = null;

  constructor() {
    this.#offers = mockOffers;
    this.#destinations = mockDestinations;
    this.#points = this.#geneatePoints();
  }

  #geneatePoints() {
    return Array.from({length: POINT_COUNT}, () => {
      const type = getRandomArrayElement(TYPE_OF_POINT);
      const city = getRandomArrayElement(CITIES);

      const destinationByCity = this.#destinations.find((destByCity) => destByCity.city === city);

      const offersByType = this.#offers.find((offerByType) => offerByType.type === type);
      const offersIDs = [];
      offersByType.offers.forEach((offer) => {
        if (getRandomNumber(0, 1)) {
          offersIDs.push(offer.id);
        }
      });

      return getRandomPoint(type, city, offersIDs, destinationByCity.id);
    });
  }

  get points() {
    return this.#points;
  }

  get offers() {
    return this.#offers;
  }

  get destinations() {
    return this.#destinations;
  }
}
