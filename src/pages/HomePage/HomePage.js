import React from 'react';
import { WaterTracker } from 'components';
import { DailyNorma } from 'components';
import { Fon } from './HomePage.styled.js';

const HomePage = () => {
  return (
    <Fon>
      <DailyNorma />
      <WaterTracker />
    </Fon>
  );
};

export default HomePage;
