import { selectPercent } from "../../../redux/selectors";
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
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(apiGetTodayWaterPortions());
  // }, [dispatch, percentage]);

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
      {/* <AddWaterButton style={buttonStyle} /> */}
      <ModalButton className="myButton" />
    </RangeAdd>
  );
};
export default RangeBar;
