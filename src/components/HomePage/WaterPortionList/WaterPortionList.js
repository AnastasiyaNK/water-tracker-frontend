import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import AddWaterButton from '../AddWatterButton/AddWatterButton';
import { getLocaleTime } from '../../../helpers/getLocaleTime';

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

import { selectNotes } from '../../../redux/selectors.js';

import { fetchWater, deleteWater } from '../../../redux/water/waterOperations';

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
          {waterNotes.map(item => (
            <Portion key={item._id}>
              <Inform>
                <Glass />
                <Ml>{String(item.waterAmount)}ml</Ml>
                <Time>{getLocaleTime(item.date)}AM</Time>
              </Inform>
              <Edit>
                <Button>
                  <Pencil />
                </Button>
                <></>
                <Button
                  onClick={() => {
                    dispatch(deleteWater(item._id));
                  }}
                >
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
