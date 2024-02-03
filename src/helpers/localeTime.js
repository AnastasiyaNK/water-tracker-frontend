import moment from 'moment';
export const localeFormat = navigator.language;
export const localeTime = (date, locale = 'HH:mm') =>
  moment(date).format(locale);

// const userLocale = navigator.language;
// const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
// console.log(userLocale, userTimeZone);

// export const localeTime = date => {
//   const options =
//     localeFormat === 'uk'
//       ? {
//           hour: '2-digit',
//           minute: '2-digit',
//         }
//       : { hour: '2-digit', minute: '2-digit' };
//   return date.toLocaleTimeString(localeFormat, options);
// };
