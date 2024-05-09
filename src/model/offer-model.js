export default class OffersModel {
  #offers = null;
  #service = null;

  constructor(service) {
    this.#service = service;
    this.#offers = this.#service.offers;
  }

  get () {
    return this.#offers;
  }

  getByType(type) {
    return this.#offers.find((offer) => offer.type === type);
  }
}
