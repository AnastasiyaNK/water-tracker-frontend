import axios from "axios";

export const authInstance = axios.create({
  baseURL: "https://water-tracker-backend-0wax.onrender.com/api",
});

export const setToken = (token) => {
  authInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

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

export const updateAvatar = async (formData) => {
  return null;
};

export const updateUser = async (formData) => {
  return null;
};
/*----------------Запити по воді(за день, за місяць, видалення нотаток за день)------------------------*/

export const getWaterNotes = async () => {
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().split("T")[0];

  const { data } = await authInstance.get("/water/today", {
    params: {
      date: formattedDate,
    },
  });

  return data;
};

export const getWaterStats = async (month) => {
  const { data } = await authInstance.get(`/water/month?${month}`);
  return data;
};

export const deleteWaterNote = async (id) => {
  const { data } = await authInstance.delete(`/water/delete/${id}`);
  return data;
};

export const requestlogout = async () => {
  const { data } = await authInstance.post("user/logout");
  return data;
};
