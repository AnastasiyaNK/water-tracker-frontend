import moment from 'moment';
export const localeFormat = navigator.language;
export const getLocaleTime = (date, locale = 'HH:mm') =>
  moment(date).format(locale);
