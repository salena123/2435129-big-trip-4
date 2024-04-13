import dayjs from 'dayjs';

const DATE_FORMAT = 'DD-MM-YYYY HH:MM';
const DAY_AND_MONTH = 'MMM DD';
const HOURS_AND_MINUTES = 'HH:mm';
const MSEC_IN_MINUTE = 60000;
const MSEC_IN_HOUR = 3600000;
const MSEC_IN_FIVE_HOURS = 18000000;
const MSEC_IN_24_HOURS = 86400000;
const MIN_IN_HOUR = 60;
const HOURS_IN_DAY = 24;

function pointDate(date) {
  return date ? dayjs(date).format(DATE_FORMAT) : '';
}

function formatDateToMMMDD(date) {
  return date ? dayjs(date).format(DAY_AND_MONTH) : '';
}

function formatDateToHHmm(date) {
  return date ? dayjs(date).format(HOURS_AND_MINUTES) : '';
}

function getTimeDuration(dateFrom, dateTo) {
  let timeDiff = dayjs(dateTo).diff(dayjs(dateFrom));
  if (timeDiff / MSEC_IN_MINUTE < MIN_IN_HOUR) {
    return dayjs(timeDiff).format('m[M]');
  } else if (timeDiff / MSEC_IN_HOUR < HOURS_IN_DAY) {
    timeDiff -= MSEC_IN_FIVE_HOURS;
    return dayjs(timeDiff).format('H[H] m[M]');
  } else {
    timeDiff -= (MSEC_IN_FIVE_HOURS + MSEC_IN_24_HOURS);
    return dayjs(timeDiff).format('D[D] HH[H] m[M]');
  }
}

function makeKebabCase(string) {
  return string.replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
}

function isChecked(int) {
  return (int === 1) ? 'checked' : '';
}
export {pointDate, formatDateToMMMDD, formatDateToHHmm, getTimeDuration, makeKebabCase, isChecked};