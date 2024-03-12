import { useTranslation } from 'react-i18next';
import { DataStyle, Data, Box } from './DayGeneralStats.stayled';

const DayGeneralStats = ({ item, index, monthName }) => {
  const { waterVolumePercentage, dailyNorma, portions } = item;
  const { t } = useTranslation();
  return (
    <Box>
      <Data>
        <DataStyle>
          {index + 1}, {monthName}
        </DataStyle>
      </Data>
      <Data>
        {t("statsDay")}{" "} <DataStyle>{dailyNorma}</DataStyle>
      </Data>
      <Data>
        {t("statsDayNorm")}{" "} <DataStyle>{waterVolumePercentage}%</DataStyle>
      </Data>
      <Data>
        {t("statsDayPortions")}{" "}
        <DataStyle>{portions}</DataStyle>
      </Data>
    </Box>
  );
};

export default DayGeneralStats;
