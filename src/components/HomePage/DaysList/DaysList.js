import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { selectStats } from '../../../redux/selectors';
import { apiGetMonthWaterPortions } from '../../../redux/water/waterSlice';
import { Day } from 'components';
import { getNameOfMonth } from '../../../helpers/getNameOfMonth';
import { getDaysInMonth } from '../../../helpers/getDaysInMonth';
import { getNumberDay } from '../../../helpers/getNumberDay';
import { createMonthArray } from '../../../helpers/createMonthArray';
import svgIcons from '../../../assets/icons/set-icons.svg';

import {
  TableDays,
  ButtonArrow,
  DaysListHeader,
  Title,
} from './DaysList.styled';

const currentDate = new Date();

const DaysList = () => {
  const stats = useSelector(selectStats);
  const [month, setMonth] = useState(currentDate.getMonth());
  const [year, setYear] = useState(currentDate.getFullYear());
  const dispatch = useDispatch();

  const monthName = getNameOfMonth(month);
  const numberOfdays = getDaysInMonth(month, year);
  const monthArray = createMonthArray(numberOfdays, monthName);

  const monthStats = monthArray?.map(item => {
    const statsItem = Object.values(stats).find(
      i => getNumberDay(i.date) === getNumberDay(item.date)
    );
    return statsItem || item;
  });

  useEffect(() => {
    dispatch(apiGetMonthWaterPortions({ year, month: month + 1 }));
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
        {monthStats.map((item, index) => (
          <div key={index}>
            <Day item={item} index={index} monthName={monthName} />
          </div>
        ))}
      </TableDays>
    </div>
  );
};
export default DaysList;
