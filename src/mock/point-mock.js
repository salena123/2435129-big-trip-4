import { getRandomArrayElement, getRandomNumber } from '../utils/common.js';
import { TYPE_OF_POINT, CITIES} from '../const';
import dayjs from 'dayjs';
import { genOffer } from './offers-mock';
import { genDestanation } from './destination-mock';

const mockPoint = [
  {
    id: 1,
    type: getRandomArrayElement(TYPE_OF_POINT),
    city: getRandomArrayElement(CITIES),
    price: getRandomNumber(0, 1000),
    timeFrom: dayjs('2024-07-09 10:50'),
    timeTo: dayjs('2024-07-09 12:50'),
    isFavorite: getRandomNumber(0, 1),
    offers: Array.from({length: getRandomNumber(1, 5)}, genOffer),
    destination: Array.from({length: getRandomNumber(1, 3)}, genDestanation),
  },
  {
    id: 2,
    type: getRandomArrayElement(TYPE_OF_POINT),
    city: getRandomArrayElement(CITIES),
    price: getRandomNumber(0, 1000),
    timeFrom: dayjs('2024-07-08 10:42'),
    timeTo: dayjs('2024-07-08 23:11'),
    isFavorite: getRandomNumber(0, 1),
    offers: Array.from({length: getRandomNumber(1, 5)}, genOffer),
    destination: Array.from({length: getRandomNumber(1, 3)}, genDestanation),
  },
  {
    id: 3,
    type: getRandomArrayElement(TYPE_OF_POINT),
    city: getRandomArrayElement(CITIES),
    price: getRandomNumber(0, 1000),
    timeFrom: dayjs('2024-01-08 16:00'),
    timeTo: dayjs('2024-01-08 16:33'),
    isFavorite: getRandomNumber(0, 1),
    offers: Array.from({length: getRandomNumber(1, 5)}, genOffer),
    destination: Array.from({length: getRandomNumber(1, 3)}, genDestanation),
  },
  {
    id: 4,
    type: getRandomArrayElement(TYPE_OF_POINT),
    city: getRandomArrayElement(CITIES),
    price: getRandomNumber(0, 1000),
    timeFrom: dayjs('2023-11-28 10:50'),
    timeTo: dayjs('2023-11-29 17:21'),
    isFavorite: getRandomNumber(0, 1),
    offers: Array.from({length: getRandomNumber(1, 5)}, genOffer),
    destination: Array.from({length: getRandomNumber(1, 3)}, genDestanation),
  },
  {
    id: 5,
    type: getRandomArrayElement(TYPE_OF_POINT),
    city: getRandomArrayElement(CITIES),
    price: getRandomNumber(0, 1000),
    timeFrom: dayjs('2024-05-08 10:50'),
    timeTo: dayjs('2024-05-08 10:51'),
    isFavorite: getRandomNumber(0, 1),
    offers: Array.from({length: getRandomNumber(1, 5)}, genOffer),
    destination: Array.from({length: getRandomNumber(1, 3)}, genDestanation),
  }
];

function getRandomPoint() {
  return getRandomArrayElement(mockPoint);
}

export {getRandomPoint};
