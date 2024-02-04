import axios from "axios";

export const authInstance = axios.create({
  baseURL: "https://water-tracker-backend-0wax.onrender.com/api",
});

export const setToken = (token) => {
  authInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const updateAvatar = (token) => {};

export const updateUser = (token) => {};

export const requestRegister = async (formData) => {
  const { data } = await authInstance.post("user/register", formData);
  setToken(data.token);
  return data;
};
export const requestLogin = async (formData) => {
  const { data } = await authInstance.post("user/login", formData);
  setToken(data.token);
  return data;
};

export const requestDayWaterData = async (date) => {
  const { data } = await authInstance.get(`water/today?date=${date}`);
  return data;
};
export const requestMonthWaterData = async (month, year) => {
  const { data } = await authInstance.get(
    `water/month?month=${month}&year=${year}`
  );

  return data;
};
export const requestAddWaterData = async (formData) => {
  const { data } = await authInstance.post("water", formData);

  return data;
};
export const requestEditWaterData = async (portionId, formData) => {
  const { data } = await authInstance.put(
    `water/update/${portionId}`,
    formData
  );

  return data;
};
export const requestDeleteWaterData = async (portionId) => {
  const { data } = await authInstance.delete(`water/${portionId}`);

  return data;
};
