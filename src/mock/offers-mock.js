import { OFFERS } from '../const';
import { getRandomArrayElement, getRandomNumber, createIdGenerator } from '../utils/common.js';
import { nanoid } from 'nanoid';

function genOffer() {
  return {
    id: nanoid(),
    name: getRandomArrayElement(OFFERS),
    offPrice: getRandomNumber(10, 500),
    checked: getRandomNumber(0, 1),
  };
}

export { genOffer};
