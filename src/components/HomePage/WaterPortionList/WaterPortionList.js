import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import AddWaterButton from '../AddWatterButton/AddWatterButton';

import {
  Ml,
  Portion,
  Time,
  Edit,
  PortionsList,
  ScrollableDiv,
  Button,
  Portions,
  Inform,
} from './WaterPortionsList.styled';
import { ReactComponent as Glass } from '../../../assets/icons/glass-desc.svg';
import { ReactComponent as Pencil } from '../../../assets/icons/pencil-square.svg';
import { ReactComponent as Bucket } from '../../../assets/icons/bucket.svg';

import {
  // selectError,
  // selectIsLoading,
  selectNotes,
  // selectPercentToday,
  // selectPercentage,
  // selectStats,
} from '../../../redux/selectors.js';

import { fetchWater } from '../../../redux/water/waterOperations';

const waterportions = [
  { id: 'id-1', ml: '250', time: '7.00' },
  { id: 'id-2', ml: '200', time: '8.00' },
  { id: 'id-3', ml: '200', time: '10.00' },
  { id: 'id-4', ml: '175', time: '11.30' },
  { id: 'id-5', ml: '250', time: '12.00' },
];

const WaterPortionsList = () => {
  const waterNotes = useSelector(selectNotes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWater());
  }, [dispatch]);

  const buttonStyle = {
    display: 'inline-flex',
    top: '25px',
    width: '114px',
    height: '24px',
    marginTop: '12px',
    color: 'var(--Primery-Color-Blue, #407bff)',
    fontFamily: 'Roboto',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '24px',
    background: 'none',
    border: 'none',
  };

  return (
    <PortionsList>
      <ScrollableDiv>
        <Portions>
          {waterportions.map(item => (
            <Portion key={item.id}>
              <Inform>
                <Glass />
                <Ml>{item.ml} ml</Ml>
                <Time>{item.time}AM</Time>
              </Inform>
              <Edit>
                <Button>
                  <Pencil />
                </Button>
                <Button>
                  <Bucket />
                </Button>
              </Edit>
            </Portion>
          ))}
        </Portions>
      </ScrollableDiv>

      <>
        <AddWaterButton style={buttonStyle} />
      </>
    </PortionsList>
  );
};
export default WaterPortionsList;
