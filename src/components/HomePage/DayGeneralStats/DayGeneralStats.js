// import react from 'react';
import { DataStyle, Data, Box, XmarkStyle } from './DayGeneralStats.stayled';
import { ReactComponent as Xmark } from '../../../assets/icons/outline-desc.svg';

const DayGeneralStats = ({ item }) => {
  const { percent, number } = item;
  return (
    <Box>
      <XmarkStyle>
        <Data>
          <DataStyle>{number}, Month</DataStyle>
        </Data>
        <Xmark />
      </XmarkStyle>

      <Data>
        Daily norma: <DataStyle>1.5L</DataStyle>
      </Data>
      <Data>
        Fulfillment of the daily norm: <DataStyle>{percent}</DataStyle>
      </Data>
      <Data>
        How many servings of water:<DataStyle> 6</DataStyle>
      </Data>
    </Box>
  );
};

export default DayGeneralStats;
