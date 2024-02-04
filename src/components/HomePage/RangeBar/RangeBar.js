import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { selectPercent } from '../../../redux/selectors.js';
import { fetchWater } from '../../../redux/water/waterOperations';
import { AddWaterButton } from 'components';
import {
  RangBar,
  Title,
  Percent,
  Percents,
  RangeAdd,
  RangeBarLine,
} from './RangeBar.styled';

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

  const buttonStyle = {
    width: '280px',
    height: '36px',
    left: '526px',
    top: '825px',
    display: 'inline-flex',
    padding: '10px 30px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    borderRadius: '10px',
    border: 'none',
    background: 'var(--Primery-Color-Blue, #407bff)',
    boxShadow: '0px 4px 8px 0px rgba(64, 123, 255, 0.34)',
    color: 'white',
  };
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
      <AddWaterButton style={buttonStyle} />
    </RangeAdd>
  );
};
export default RangeBar;
