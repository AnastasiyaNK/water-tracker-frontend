import { DataStyle, Data, Box } from './DayGeneralStats.stayled';

const DayGeneralStats = ({ item, index, monthName }) => {
  const { waterVolumePercentage, dailyNorma, portions } = item;
  return (
    <Box>
      <Data>
        <DataStyle>
          {index + 1}, {monthName}
        </DataStyle>
      </Data>
      <Data>
        Daily norma: <DataStyle>{dailyNorma}</DataStyle>
      </Data>
      <Data>
        Fulfillment of the daily norm:{' '}
        <DataStyle>{waterVolumePercentage}%</DataStyle>
      </Data>
      <Data>
        How many servings of water:<DataStyle> {portions}</DataStyle>
      </Data>
    </Box>
  );
};

export default DayGeneralStats;
