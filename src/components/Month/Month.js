import React from 'react';
import { MonthBox, Title } from './Month.style';
import { DaysList } from 'components';

const Month = () => {
  return (
    <MonthBox>
      <Title>Month</Title>
      <DaysList />
    </MonthBox>
  );
};

export default Month;
