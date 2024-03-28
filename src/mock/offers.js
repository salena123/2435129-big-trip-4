import { OFFERS } from '../const';
import { getRandomArrayElement, getRandomNumber, createIdGenerator } from '../utils';

function genOffer() {
  return {
    id: createIdGenerator(),
    name: getRandomArrayElement(OFFERS),
    offPrice: getRandomNumber(10, 500),
  };
}

export { genOffer};
