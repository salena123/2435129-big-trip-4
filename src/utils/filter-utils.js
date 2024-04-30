import {FilterType} from '../const.js';
import { isPointFuture, isPointPresent, isPointPast } from './point-utils.js';
const filter = {
  [FilterType.EVERYTHING]: (points) => [...points],
  [FilterType.FUTURE]: (points) => points.filter((point) => isPointFuture(point)),
  [FilterType.PRESENT]: (points) => points.filter((point) => isPointPresent(point)),
  [FilterType.PAST]: (points) => points.filter((point) => isPointPast(point)),
};


function genFilters(events) {
  return Object.entries(filter).map(
    ([filterType, filterEvents]) => ({
      type: filterType,
      exists: filterEvents(events).length > 0
    })
  );
}

export {genFilters};
