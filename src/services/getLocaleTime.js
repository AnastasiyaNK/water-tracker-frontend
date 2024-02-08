import moment from 'moment';
export const localeFormat = navigator.language;
export const getLocaleTime = (date, locale = 'HH:mm') =>
  moment.utc(date).locale(localeFormat).format(locale);
