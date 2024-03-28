import { getRandomArrayElement, createIdGenerator, getRandomNumber } from '../utils';
import { TYPE_OF_POINT, CITIES, DESTINATION } from '../const';
import dayjs from 'dayjs';
import { genOffer } from './offers';
import { genDestanation } from './destination';

const mockPoint = [
  {
    id: createIdGenerator,
    type: getRandomArrayElement(TYPE_OF_POINT),
    city: getRandomArrayElement(CITIES),
    price: getRandomNumber(0, 1000),
    timeFrom: dayjs('2024-07-09 10:50'),
    timeTo: dayjs('2024-07-09 12:50'),
    isFavorite: getRandomNumber(0, 1),
    offers: Array.from({length: getRandomNumber(0, 5)}, genOffer),
    destination: getRandomArrayElement(DESTINATION)
  },
  {
    id: createIdGenerator,
    type: getRandomArrayElement(TYPE_OF_POINT),
    city: getRandomArrayElement(CITIES),
    price: getRandomNumber(0, 1000),
    timeFrom: dayjs('2024-07-08 10:42'),
    timeTo: dayjs('2024-07-08 23:11'),
    isFavorite: getRandomNumber(0, 1),
    offers: Array.from({length: getRandomNumber(1, 5)}, genOffer),
    destination: getRandomArrayElement(DESTINATION)
  },
  {
    id: createIdGenerator,
    type: getRandomArrayElement(TYPE_OF_POINT),
    city: getRandomArrayElement(CITIES),
    price: getRandomNumber(0, 1000),
    timeFrom: dayjs('2024-01-08 16:00'),
    timeTo: dayjs('2024-01-08 16:33'),
    isFavorite: getRandomNumber(0, 1),
    offers: Array.from({length: getRandomNumber(1, 5)}, genOffer),
    destination: getRandomArrayElement(DESTINATION)
  },
  {
    id: createIdGenerator,
    type: getRandomArrayElement(TYPE_OF_POINT),
    city: getRandomArrayElement(CITIES),
    price: getRandomNumber(0, 1000),
    timeFrom: dayjs('2023-11-28 10:50'),
    timeTo: dayjs('2023-11-29 17:21'),
    isFavorite: getRandomNumber(0, 1),
    offers: Array.from({length: getRandomNumber(1, 5)}, genOffer),
    destination: getRandomArrayElement(DESTINATION)
  },
  {
    id: createIdGenerator,
    type: getRandomArrayElement(TYPE_OF_POINT),
    city: getRandomArrayElement(CITIES),
    price: getRandomNumber(0, 1000),
    timeFrom: dayjs('2024-05-08 10:50'),
    timeTo: dayjs('2024-05-08 10:51'),
    isFavorite: getRandomNumber(0, 1),
    offers: Array.from({length: getRandomNumber(1, 5)}, genOffer),
    destination: Array.from({length: getRandomNumber(0, 5)}, genDestanation),
  }
];

function getRandomPoint() {
  return getRandomArrayElement(mockPoint);
}

export {getRandomPoint};
