import axios from 'axios';

export const authInstance = axios.create({
  baseURL: 'https://water-tracker-backend-0wax.onrender.com/api',
});

export const setToken = token => {
  authInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const requestRegister = async formData => {
  const { data } = await authInstance.post('user/register', formData);
  setToken(data.token);

  const headerAxiosToken = axios.defaults.headers.common.Authorization;
  console.log(headerAxiosToken, 'headerAxiosToken');
  console.log(data.token, 'data.token');
  return data;
};
export const requestLogin = async formData => {
  const { data } = await authInstance.post('user/login', formData);
  setToken(data.token);

  const headerAxiosToken = axios.defaults.headers.common.Authorization;
  console.log(headerAxiosToken);
  return data;
};

export const updateAvatar = async formData => {
  const { data } = await authInstance.patch('user/avatar', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return data;
};

export const updateUser = async formData => {
  const { data } = await authInstance.patch('user/update', formData);
  return data;
};

/*----------------Запити по воді(за день, за місяць, видалення нотаток за день)------------------------*/

export const getWaterNotes = async () => {
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().split('T')[0];

  const { data } = await authInstance.get('/water/today', {
    params: {
      date: formattedDate,
    },
  });

  return data;
};

export const getWaterStats = async month => {
  const { data } = await axios.get(`/water/${month}`);
  return data;
};

export const deleteWaterNote = async id => {
  const { data } = await axios.delete(`/water/delete/${id}`);
  return data;
};
