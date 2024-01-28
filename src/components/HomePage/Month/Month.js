import React from 'react';
import { MonthBox, Title } from './Month.styled';
import { DaysList } from 'components';
// import {  Paginate } from 'components';

const Month = () => {
  return (
    <MonthBox>
      <Title>Month</Title>
      {/* <Paginate /> */}
      <DaysList />
    </MonthBox>
  );
};

export default Month;
