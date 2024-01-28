import React from 'react';
import { RangeBar, WaterTracker } from 'components';
import { DailyNorma } from 'components';
import { Fon } from './HomePage.styled.js';

const HomePage = () => {
  return (
    <Fon>
      <DailyNorma />
      <WaterTracker />
      <RangeBar />
    </Fon>
  );
};

export default HomePage;
