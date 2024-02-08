import { selectPercent } from "../../../redux/water/waterSelectors";
import "./styles.css";

import {
  RangBar,
  Title,
  Percent,
  Percents,
  RangeAdd,
  RangeBarLine,
} from "./RangeBar.styled";

import ModalButton from "components/ModalButton/ModalButton";
import { useSelector } from "react-redux";

const RangeBar = () => {
  const percentage = useSelector(selectPercent);
  return (
    <RangeAdd>
      <RangBar>
        <Title>Today</Title>
        <RangeBarLine $percentage={percentage}></RangeBarLine>
        <Percents>
          <Percent>0%</Percent>
          <Percent>100%</Percent>
        </Percents>
      </RangBar>
      <ModalButton className="myButton" />
    </RangeAdd>
  );
};
export default RangeBar;
