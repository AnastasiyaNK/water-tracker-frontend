export const getNumberDay = (dateString) => {
  const parts = dateString?.split(", ");
  return parseInt(parts?.[0] ?? 0);
};
