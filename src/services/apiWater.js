import axios from 'axios';

axios.defaults.baseURL = 'https://water-tracker-backend-0wax.onrender.com/api';

export const getWaterNotes = async () => {
  const { data } = await axios.get('/water/today');
  console.log(data, 'data');
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
