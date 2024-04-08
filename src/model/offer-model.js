import { genOffer } from '../mock/offers';
import { getRandomNumber } from '../utils';

export default class OfferModel {
  offers = Array.from({length: getRandomNumber(0, 5)}, genOffer);

  getOffers() {
    return this.offers;
  }
}
