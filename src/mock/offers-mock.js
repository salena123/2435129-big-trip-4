import { OFFERS, TYPE_OF_POINT } from '../const';
import { getRandomArrayElement, getRandomNumber } from '../utils/common.js';
import { nanoid } from 'nanoid';

function genOffer(type) {
  return {
    type,
    offers: Array.from({length: getRandomNumber(0, OFFERS.length)}, () => (
      {
        id: nanoid(),
        title: getRandomArrayElement(OFFERS),
        price: getRandomNumber(10, 500),
        isChecked: getRandomNumber(0, 1),
      })
    ),
  };
}

const mockOffers = [];

TYPE_OF_POINT.forEach((type) => {
  const offer = genOffer(type);
  mockOffers.push(offer);
});

export { genOffer, mockOffers };
