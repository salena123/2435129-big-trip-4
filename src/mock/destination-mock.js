import { CITIES, DESCRIPTION } from '../const';
import { getRandomArrayElement, getRandomNumber } from '../utils/common.js';
import { nanoid } from 'nanoid';

function genDestanation(city) {
  return {
    id: nanoid(),
    city,
    description: getRandomArrayElement(DESCRIPTION),
    pictures: Array.from({length: getRandomNumber(1, 5)}, () => ({
      src: `https://loremflickr.com/248/152?random=${getRandomNumber(1, 1000)}`,
      description: getRandomArrayElement(DESCRIPTION),
    })),
  };
}


const mockDestinations = [];

CITIES.forEach((city) => {
  const destanation = genDestanation(city);
  mockDestinations.push(destanation);
});

export {genDestanation, mockDestinations};


