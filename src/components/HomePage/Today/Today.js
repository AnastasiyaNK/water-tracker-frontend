import { TodayBox, TodayStile } from "./Today.styled";
import { WaterPortionsList } from "components";

const Today = () => {
  return (
    <>
      <TodayBox>
        <TodayStile>Today</TodayStile>
        <WaterPortionsList />
      </TodayBox>
    </>
  );
};

export default Today;
