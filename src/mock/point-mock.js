import { getRandomArrayElement, getRandomNumber } from '../utils/common.js';
import dayjs from 'dayjs';
import { nanoid } from 'nanoid';

const mockPoint = [
  {
    type: '',
    city: '',
    price: getRandomNumber(0, 1000),
    timeFrom: dayjs('2024-07-09 10:50'),
    timeTo: dayjs('2024-07-09 12:50'),
    isFavorite: getRandomNumber(0, 1),
  },
  {
    type: '',
    city: '',
    price: getRandomNumber(0, 1000),
    timeFrom: dayjs('2024-07-08 10:42'),
    timeTo: dayjs('2024-07-08 23:11'),
    isFavorite: getRandomNumber(0, 1),
  },
  {
    type: '',
    city: '',
    price: getRandomNumber(0, 1000),
    timeFrom: dayjs('2024-01-08 16:00'),
    timeTo: dayjs('2024-01-08 16:33'),
    isFavorite: getRandomNumber(0, 1),
  },
  {
    type: '',
    city: '',
    price: getRandomNumber(0, 1000),
    timeFrom: dayjs('2024-11-28 10:50'),
    timeTo: dayjs('2024-11-29 17:21'),
    isFavorite: getRandomNumber(0, 1),
  },
  {
    type: '',
    city: '',
    price: getRandomNumber(0, 1000),
    timeFrom: dayjs('2024-05-08 10:50'),
    timeTo: dayjs('2024-05-08 10:51'),
    isFavorite: getRandomNumber(0, 1),
  }
];

function getRandomPoint(type, city, offersID, destinationID) {
  return {
    id: nanoid(),
    ...getRandomArrayElement(mockPoint),
    type,
    city,
    offers: offersID,
    destinations: destinationID,
  };
}

export {getRandomPoint};
