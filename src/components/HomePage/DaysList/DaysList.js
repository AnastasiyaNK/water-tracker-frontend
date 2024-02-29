import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { selectStats } from "../../../redux/water/waterSelectors";
import { apiGetMonthWaterPortions } from "../../../redux/water/waterSlice";
import { Day } from "components";
import { getNameOfMonth } from "../../../services/getNameOfMonth";
import { getDaysInMonth } from "../../../services/getDaysInMonth";
import { getNumberDay } from "../../../services/getNumberDay";
import { createMonthArray } from "../../../services/createMonthArray";
// import svgIcons from "../../../assets/icons/set-icons.svg";
import { ReactComponent as IconArrowLeft } from "../../../assets/icons/arrow-left.svg";
import { ReactComponent as IconArrowRight } from "../../../assets/icons/arrow-rigth.svg";

import {
  TableDays,
  ButtonArrow,
  DaysListHeader,
  Title,
  StyledBtnGroupWrapper,
} from "./DaysList.styled";

const currentDate = new Date();

const DaysList = () => {
  const stats = useSelector(selectStats);
  const [month, setMonth] = useState(currentDate.getMonth());
  const [year, setYear] = useState(currentDate.getFullYear());
  const dispatch = useDispatch();

  const monthName = getNameOfMonth(month);
  const numberOfdays = getDaysInMonth(month, year);
  const monthArray = createMonthArray(numberOfdays, monthName);

  const monthStats = monthArray?.map((item) => {
    const statsItem = Object.values(stats).find(
      (i) => getNumberDay(i.date) === getNumberDay(item.date)
    );
    return statsItem || item;
  });

  useEffect(() => {
    dispatch(apiGetMonthWaterPortions({ year, month: month + 1 }));
  }, [dispatch, year, month]);

  const previousMonth = () => {
    if (month === 0) {
      setYear((prevYear) => prevYear - 1);
      setMonth(11);
    } else {
      setMonth((prevMonth) => prevMonth - 1);
    }
  };

  const nextMonth = () => {
    if (month === 11) {
      setYear((prevYear) => prevYear + 1);
      setMonth(0);
    } else {
      setMonth((prevMonth) => prevMonth + 1);
    }
  };

  return (
    <>
      <DaysListHeader>
        <Title>Month</Title>
        <StyledBtnGroupWrapper>
          <ButtonArrow onClick={previousMonth}>
            <IconArrowLeft />
          </ButtonArrow>
          <span>{`${monthName}, ${year}`}</span>
          <ButtonArrow
            onClick={nextMonth}
            disabled={currentDate < new Date(year, month + 1)}
          >
            <IconArrowRight />
          </ButtonArrow>
        </StyledBtnGroupWrapper>
      </DaysListHeader>
      <TableDays>
        {monthStats.map((item, index) => (
          // <div key={index}>
          <Day key={index} item={item} index={index} monthName={monthName} />
          // </div>
        ))}
      </TableDays>
    </>
  );
};
export default DaysList;
