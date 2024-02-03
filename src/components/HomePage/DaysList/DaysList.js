import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchWater } from '../../../redux/water/waterOperations';
import { Day } from 'components';

import {
  // selectError,
  // selectIsLoading,
  selectNotes,
  // selectPercentToday,
  // selectPercentage,
  // selectStats,
} from '../../../redux/selectors.js';

import { TableDays } from './DaysList.styled';

const days = [
  { id: 'id-1', number: '1', percent: '150' },
  { id: 'id-2', number: '2', percent: '50' },
  { id: 'id-3', number: '3', percent: '100' },
  { id: 'id-4', number: '4', percent: '50' },
  { id: 'id-5', number: '5', percent: '50' },
  { id: 'id-6', number: '6', percent: '50' },
  { id: 'id-7', number: '7', percent: '100' },
  { id: 'id-8', number: '8', percent: '50' },
  { id: 'id-9', number: '9', percent: '50' },
  { id: 'id-10', number: '10', percent: '150' },
  { id: 'id-11', number: '11', percent: '50' },
  { id: 'id-12', number: '12', percent: '100' },
  { id: 'id-13', number: '13', percent: '50' },
  { id: 'id-14', number: '14', percent: '50' },
  { id: 'id-15', number: '15', percent: '150' },
  { id: 'id-16', number: '16', percent: '50' },
  { id: 'id-17', number: '17', percent: '100' },
  { id: 'id-18', number: '18', percent: '50' },
  { id: 'id-19', number: '19', percent: '50' },
  { id: 'id-20', number: '20', percent: '150' },
  { id: 'id-21', number: '21', percent: '50' },
  { id: 'id-22', number: '22', percent: '100' },
  { id: 'id-23', number: '23', percent: '50' },
  { id: 'id-24', number: '24', percent: '50' },
  { id: 'id-25', number: '25', percent: '150' },
  { id: 'id-26', number: '26', percent: '50' },
  { id: 'id-27', number: '27', percent: '100' },
  { id: 'id-28', number: '28', percent: '50' },
  { id: 'id-29', number: '29', percent: '50' },
  { id: 'id-30', number: '30', percent: '150' },
  { id: 'id-31', number: '31', percent: '150' },
];

// const obgMonth = {
//   '2024-02-15': {
//     date: '15, January',
//     portions: 1,
//     waterVolumePercentage: 15,
//     dailyNorma: 1,
//   },
//   '2024-02-21': {
//     date: '21, January',
//     portions: 2,
//     waterVolumePercentage: 50,
//     dailyNorma: 1,
//   },
//   '2024-02-22': {
//     date: '22, January',
//     portions: 1,
//     waterVolumePercentage: 45,
//     dailyNorma: 1,
//   },
//   '2024-02-23': {
//     date: '23, January',
//     portions: 2,
//     waterVolumePercentage: 27,
//     dailyNorma: 1,
//   },
// };
// // console.log(obgMonth['2024-02-23']);

const DaysList = () => {
  const waterNotes = useSelector(selectNotes);
  const dispatch = useDispatch();
  console.log(waterNotes, 'waterNotes');

  useEffect(() => {
    dispatch(fetchWater());
  }, [dispatch]);

  return (
    <div>
      <TableDays>
        {days.map(item => (
          <div key={item.id}>
            <Day item={item} />
          </div>
        ))}
      </TableDays>
    </div>
  );
};
export default DaysList;
