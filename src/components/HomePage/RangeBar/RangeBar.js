import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { selectPercent } from '../../../redux/selectors.js';
import { fetchWater } from '../../../redux/water/waterOperations';
// import { AddWaterButton } from 'components';
import './styles.css';

import {
  RangBar,
  Title,
  Percent,
  Percents,
  RangeAdd,
  RangeBarLine,
} from './RangeBar.styled';

import ModalButton from 'components/ModalButton/ModalButton';

const RangeBar = () => {
  const percentage = useSelector(selectPercent);
  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(fetchWater());
    },
    [dispatch],
    percentage
  );

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
