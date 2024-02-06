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
export const requestUserCurrent = async () => {
  const { data } = await authInstance.get("user");

  return data;
};

export const updateAvatar = async (formData) => {
  const { data } = await authInstance.patch("user/avatar", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return data;
};

export const updateUser = async (formData) => {
  const { data } = await authInstance.patch("user/update", formData);
  return data;
};

export const setMyDailyNorma = async (formData) => {
  const { data } = await authInstance.patch("user/dailyNorma", formData);
  return data;
};

export const requestDayWaterData = async () => {
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().split("T")[0];

  const { data } = await authInstance.get("/water/today", {
    params: {
      date: formattedDate,
    },
  });

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

export const getWaterStats = async (month, year) => {
  const { data } = await authInstance.get(
    `/water/month?month=${month}&year=${year}`
  );
  return data;
};

export const deleteWaterNote = async (id) => {
  const { data } = await authInstance.delete(`/water/${id}`);
  return data;
};

export const requestlogout = async () => {
  const { data } = await authInstance.post("user/logout");
  return data;
};
