import { SortType } from '../const.js';
import { sortTime,sortPrice, sortDay } from './point-utils.js';

const sort = {
  [SortType.DAY]: (points) => [...points].sort(sortDay),
  [SortType.PRICE]: (points) => [...points].sort(sortPrice),
  [SortType.TIME]: (points) => [...points].sort(sortTime),
};

export { sort };
