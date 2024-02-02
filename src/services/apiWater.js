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

// const water1 = [
//   {
//     id: '76rfoyuvop86ryfl',
//     date: 'Thu Dec 28 2023 12:25:46 GMT+0200 (за східноєвропейським стандартним часом)',
//     volumeWater: 200,
//     userId: 'u6rfoluyvl87ygf;vi.k',
//   },
// ];

// const water2 = [
//   {
//     userId: 'u6rfoluyvl87ygf;vi.k',
//     notes: [
//       {
//         id: '76rfoyuvop86ryfl',
//         date: 'Thu Dec 28 2023 12:25:46 GMT+0200 (за східноєвропейським стандартним часом)',
//         volumeWater: 200,
//       },
//     ],
//   },
// ];

// {
//   "waterVolumeSum": 400,
//   "waterVolumes": [
//     {
//       "_id": "65ba589cab96c7a17ee3fd",
//       "waterAmount": 350,
//       "date": "2024-01-31T12:30:02.593Z",
//       "owner": "23fa589cab96c7a17ee3fd"
//     }
//   ]
// }
