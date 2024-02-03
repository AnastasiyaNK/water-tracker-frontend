import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchStats } from '../../../redux/water/waterOperations';

import { DateStyle, DateRow, ArrowButton } from './Calendar.styled';
import { ReactComponent as ArrowRigth } from '../../../assets/icons/arrow-rigth.svg';
import { ReactComponent as ArrowLeft } from '../../../assets/icons/arrow-left.svg';

const today = new Date();
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const Calendar = () => {
  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());
  const dispatch = useDispatch();

  const monthName = months[today.getMonth()];

  useEffect(() => {
    dispatch(fetchStats(`${year}-${month + 1}`));
  }, [dispatch, year, month]);

  const monthAgo = () => {
    if (month === 0) {
      setYear(prevYear => prevYear - 1);
      setMonth(11);
    } else {
      setMonth(prevMonth => prevMonth - 1);
    }
  };

  const monthAhead = () => {
    if (month === 11) {
      setYear(prevYear => prevYear + 1);
      setMonth(0);
    } else {
      setMonth(prevMonth => prevMonth + 1);
    }
  };

  return (
    <DateRow>
      <ArrowButton onClick={monthAgo}>
        <ArrowLeft />
      </ArrowButton>
      <DateStyle>{`${monthName},${year}`}</DateStyle>
      <ArrowButton onClick={monthAhead}>
        <ArrowRigth />
      </ArrowButton>
    </DateRow>
  );
};

export default Calendar;
