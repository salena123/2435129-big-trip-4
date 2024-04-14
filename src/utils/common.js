const getRandomNumber = function(min, max) {
  const lower = Math.ceil(Math.min(max, min));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const createIdGenerator = function() {
  let id = 0;
  return function () {
    id += 1;
    return id;
  };
};

function getRandomArrayElement (items) {
  return items[Math.floor(Math.random() * items.length)];
}

export {getRandomArrayElement, createIdGenerator, getRandomNumber};
