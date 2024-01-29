import React from 'react';
import { TodayBox } from './Today.styled';
import { WaterPortionsList } from 'components';

const Today = () => {
  return (
    <>
      <TodayBox>
        Today
        <WaterPortionsList />
      </TodayBox>
    </>
  );
};

export default Today;
