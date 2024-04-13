import { genOffer } from '../mock/offers-mock';
import { getRandomNumber } from '../utils/common.js';

export default class OfferModel {
  offers = Array.from({length: getRandomNumber(0, 5)}, genOffer);

  getOffers() {
    return this.offers;
  }
}
