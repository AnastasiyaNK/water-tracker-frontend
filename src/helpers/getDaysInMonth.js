export const getDaysInMonth = (monthNum, yearNum) => {
  return new Date(yearNum, monthNum + 1, 0).getDate();
};
