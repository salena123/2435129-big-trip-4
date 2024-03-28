import { CITIES, DESCRIPTION } from '../const';
import { getRandomArrayElement, getRandomNumber, createIdGenerator } from '../utils';

function genDestanation() {
  const city = getRandomArrayElement(CITIES);
  return {
    id: createIdGenerator,
    name: city,
    description: getRandomArrayElement(DESCRIPTION),
    picture: [
      {
        'scr': `https://loremflickr.com/248/152?random=${getRandomNumber(0, 100)}`,
        'description': `${city} description`,
      }
    ]
  };
}

export {genDestanation};


