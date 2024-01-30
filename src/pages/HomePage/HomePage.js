import React from 'react';
import { AddWaterButton, RangeBar, WaterTracker } from 'components';
import { DailyNorma } from 'components';
import { Fon } from './HomePage.styled.js';

const HomePage = () => {
  return (
    <Fon>
      <DailyNorma />
      <WaterTracker />
      <RangeBar />
      <AddWaterButton />
    </Fon>
  );
};

export default HomePage;
