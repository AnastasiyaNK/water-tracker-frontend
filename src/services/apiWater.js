import axios from 'axios';

axios.defaults.baseURL = 'https://water-tracker-backend-0wax.onrender.com/api';

export const getWaterNotes = async () => {
  const { data } = await axios.get(
    '/water/today/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YmQwZjk0YzVhOTQ1YTQ2ZTc4ZGFkNCIsImlhdCI6MTcwNjkwNzYxMiwiZXhwIjoxNzA2OTk0MDEyfQ.7mkx_GBmtX6GpGS8bybeSZvAYtFfjepy3ZUcKGAHy68&data=2024-02-02'
  );
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
