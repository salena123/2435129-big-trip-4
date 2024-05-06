import { CITIES, DESCRIPTION } from '../const';
import { getRandomArrayElement, getRandomNumber } from '../utils/common.js';
import { nanoid } from 'nanoid';

function genPicture () {
  return `https://loremflickr.com/248/152?random=${getRandomNumber(1, 1000)}`;
}

function genDestanation() {
  const city = getRandomArrayElement(CITIES);
  return {
    id: nanoid(),
    name: city,
    description: getRandomArrayElement(DESCRIPTION),
    picture: Array.from({length: getRandomNumber(1, 5)}, genPicture),
  };
}

export {genDestanation};


