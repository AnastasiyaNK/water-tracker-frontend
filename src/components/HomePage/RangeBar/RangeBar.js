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
import { useTranslation } from "react-i18next";

const RangeBar = () => {
  const { t } = useTranslation();
  const percentage = useSelector(selectPercent);
  return (
    <RangeAdd>
      <RangBar>
        <Title>{t("today")}</Title>
        <RangeBarLine $percentage={percentage} />
        <Percents>
          <Percent>0%</Percent>
          <Percent className="percent-bold">50%</Percent>
          <Percent>100%</Percent>
        </Percents>
      </RangBar>

      <ModalButton className="myButton" />
    </RangeAdd>
  );
};
export default RangeBar;
