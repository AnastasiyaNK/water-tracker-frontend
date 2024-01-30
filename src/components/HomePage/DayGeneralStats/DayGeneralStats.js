// import react from 'react';
import { DataStyle, Data, Box } from './DayGeneralStats.stayled';

const DayGeneralStats = ({ item }) => {
  const { percent, number } = item;
  return (
    <Box>
      <Data>
        <DataStyle>{number}, Month</DataStyle>
      </Data>
      {/* <Xmark /> */}

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
