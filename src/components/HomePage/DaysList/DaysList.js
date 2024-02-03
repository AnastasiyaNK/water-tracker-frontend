import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchStats } from '../../../redux/water/waterOperations';
import { Day } from 'components';
import { getName } from '../../../helpers/getName';
import svgIcons from '../../../assets/icons/set-icons.svg';

import {
  TableDays,
  ButtonArrow,
  DaysListHeader,
  Title,
} from './DaysList.styled';

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
const currentDate = new Date();

const DaysList = () => {
  const [month, setMonth] = useState(currentDate.getMonth());
  const [year, setYear] = useState(currentDate.getFullYear());
  const dispatch = useDispatch();

  const monthName = getName(month);

  useEffect(() => {
    dispatch(fetchStats(`year=${year}&month=${month + 1}`));
  }, [dispatch, year, month]);

  const previousMonth = () => {
    if (month === 0) {
      setYear(prevYear => prevYear - 1);
      setMonth(11);
    } else {
      setMonth(prevMonth => prevMonth - 1);
    }
  };

  const nextMonth = () => {
    if (month === 11) {
      setYear(prevYear => prevYear + 1);
      setMonth(0);
    } else {
      setMonth(prevMonth => prevMonth + 1);
    }
  };
  return (
    <div>
      <DaysListHeader>
        <Title>Month</Title>
        <div>
          <ButtonArrow onClick={previousMonth}>
            <svg height="14" width="14" data-arrow="right">
              <use href={`${svgIcons}#icon-arrow`}></use>
            </svg>
          </ButtonArrow>
          <p>{`${monthName}, ${year}`}</p>
          <ButtonArrow
            onClick={nextMonth}
            disabled={currentDate < new Date(year, month + 1)}
          >
            <svg height="14" width="14" data-arrow="left">
              <use href={`${svgIcons}#icon-arrow`}></use>
            </svg>
          </ButtonArrow>
        </div>
      </DaysListHeader>
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
