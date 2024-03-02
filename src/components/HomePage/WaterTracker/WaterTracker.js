import { DaysList, Today } from "components";
import { WaterStatistic } from "./WaterTracker.styled";

const WaterTracker = () => {
  return (
    <WaterStatistic>
      <Today />
      <DaysList />
    </WaterStatistic>
  );
};

export default WaterTracker;
