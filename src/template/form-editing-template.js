import { getRandomNumber, getRandomArrayElement } from '../utils/common.js';
import {makeKebabCase } from '../utils/point-utils.js';
import { TYPE_OF_POINT, CITIES } from '../const';
import dayjs from 'dayjs';
import { genOffer } from '../mock/offers-mock';
import { genDestanation } from '../mock/destination-mock';


const BLANK_POINT = {
  id: 1,
  type: getRandomArrayElement(TYPE_OF_POINT),
  city: getRandomArrayElement(CITIES),
  price: getRandomNumber(0, 1000),
  timeFrom: dayjs('2024-07-09 10:50'),
  timeTo: dayjs('2024-07-09 12:50'),
  isFavorite: false,
  offers: Array.from({length: getRandomNumber(1, 5)}, genOffer),
  destination: Array.from({length: 1}, genDestanation),
};

function makeOffers1(offers) {
  const container = [];
  for (let i = 0; i < offers.length; i++){

    const checkedOffer =
    `<div class="event__offer-selector">
      <input class="event__offer-checkbox  visually-hidden" id="event-offer-seats-1" type="checkbox" name="event-offer-${makeKebabCase(offers[i].title)}" ${(offers[i].isChecked) ? 'checked' : ''} >
      <label class="event__offer-label" for="event-offer-${makeKebabCase(offers[i].title)}-1">
        <span class="event__offer-title">${offers[i].title}</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">${offers[i].price}</span>
      </label>
    </div>`;
    container.push(checkedOffer);
  }
  return container.join('\n');
}

function getPhotos(pictures) {
  const container = [];
  for (let i = 0; i < pictures.length; i++) {
    const picture = `<img class="event__photo" src="${pictures[i].src}" alt="Event photo">`;
    container.push(picture);
  }
  return container.join('\n');
}

function isCheckedType (checkedTypeOfPoint, typeOfPoint) {

  if (checkedTypeOfPoint === typeOfPoint){
    return 'checked';
  }

}

function genEventTypeItem (arrayType, pointType) {
  const container = [];
  for (let i = 0; i < arrayType.length; i++) {
    const type =
    `<div class="event__type-item">
      <input id="event-type-${makeKebabCase(arrayType[i])}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${makeKebabCase(arrayType[i])}" ${isCheckedType(pointType, arrayType[i])}>
      <label class="event__type-label  event__type-label--${makeKebabCase(arrayType[i])}" for="event-type-${makeKebabCase(arrayType[i])}-1">${arrayType[i]}</label>
    </div>`;
    container.push(type);
  }
  return container.join('\n');
}

function genPointDestinationListElement() {
  const container = [];
  for (const city of CITIES) {
    const aaa =
    `<option value="${city}">${city}</option>`;
    container.push(aaa);
  }
  return container.join('\n');
}

function createEditFormElementTemplate (point, offers, destination) {
  const { type, price, timeFrom, timeTo, city } = point;
  return `
  <li>
    <form class="event event--edit" action="#" method="post">
      <header class="event__header">
        <div class="event__type-wrapper">
          <label class="event__type  event__type-btn" for="event-type-toggle-1">
            <span class="visually-hidden">Choose event type</span>
            <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
          </label>
          <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

          <div class="event__type-list">
            <fieldset class="event__type-group">
              <legend class="visually-hidden">Event type</legend>
              ${genEventTypeItem(TYPE_OF_POINT, type)}
            </fieldset>
          </div>
        </div>

        <div class="event__field-group  event__field-group--destination">
          <label class="event__label  event__type-output" for="event-destination-1">
          ${type}
          </label>
          <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${city}" list="destination-list-1">
          <datalist id="destination-list-1">
          ${genPointDestinationListElement()}
          </datalist>
        </div>

        <div class="event__field-group  event__field-group--time">
          <label class="visually-hidden" for="event-start-time-1">From</label>
          <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${dayjs(timeFrom).format('DD/MM/YY HH:mm')}">
          &mdash;
          <label class="visually-hidden" for="event-end-time-1">To</label>
          <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${dayjs(timeTo).format('DD/MM/YY HH:mm')}">
        </div>

        <div class="event__field-group  event__field-group--price">
          <label class="event__label" for="event-price-1">
            <span class="visually-hidden">Price</span>
            &euro;
          </label>
          <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${price}">
        </div>

        <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
        <button class="event__reset-btn" type="reset">Delete</button>
        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </header>
      <section class="event__details">
        <section class="event__section  event__section--offers">
          <h3 class="event__section-title  event__section-title--offers">Offers</h3>

          <div class="event__available-offers">
            ${makeOffers1(offers.offers)}
          </div>
        </section>

        <section class="event__section  event__section--destination">
          <h3 class="event__section-title  event__section-title--destination">Destination</h3>
          <p class="event__destination-description">${destination.description}</p>
          <div class="event__photos-container">
            <div class="event__photos-tape">
              ${getPhotos(destination.pictures)}
            </div>
          </div>
        </section>
      </section>
    </form>
    </li>`;
}

export { createEditFormElementTemplate, BLANK_POINT } ;
