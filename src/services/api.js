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
  return data;
};
export const requestLogin = async formData => {
  const { data } = await authInstance.post('user/login', formData);
  setToken(data.token);
  return data;
};
