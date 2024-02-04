export const createMonthArray = (number, name) =>
  Array.from({ length: number }, (_, index) => ({
    date: `${index + 1}, ${name}`,
    portions: 0,
    waterVolumePercentage: 0,
    dailyNorma: 0,
  }));
