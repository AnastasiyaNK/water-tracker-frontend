import React from 'react';
import { RangeBar, WaterTracker } from 'components';
import { DailyNorma } from 'components';
import { Fon, DailyRangeStyle } from './HomePage.styled.js';

const HomePage = () => {
  return (
    <Fon>
      <DailyRangeStyle>
        <DailyNorma />
        <RangeBar />
      </DailyRangeStyle>
      <WaterTracker />
    </Fon>
  );
};

export default HomePage;
