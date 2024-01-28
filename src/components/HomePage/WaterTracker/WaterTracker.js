import React from 'react';
import { Today } from 'components';
import { Month } from 'components';
import { WaterStatistic } from './WaterTracker.styled';

const WaterTracker = () => {
  return (
    <WaterStatistic>
      <Today />
      <Month />
    </WaterStatistic>
  );
};

export default WaterTracker;
