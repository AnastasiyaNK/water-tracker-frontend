import React from 'react';
import { MonthBox, TitleCalendar, Title } from './Month.styled';
import { DaysList, Calendar } from 'components';

const Month = () => {
  return (
    <MonthBox>
      <TitleCalendar>
        <Title>Month</Title>
        <Calendar />
      </TitleCalendar>

      <DaysList />
    </MonthBox>
  );
};

export default Month;
