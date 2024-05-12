export default class PointModel {
  #service = null;
  #points = null;

  constructor(service) {
    this.#service = service;
    this.#points = this.#service.points;
  }

  get() {
    return this.#points;
  }
}
