// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import { deleteWaterPortion } from '../../redux/waterportions/operations';
// import { selectVisibleContacts } from 'redux/contacts/selectors';

import {
  Portions,
  Portion,
  Time,
  Edit,
  PortionsList,
  Addwater,
  ScrollableDiv,
  Button,
} from './WaterPortionsList.styled';
import { ReactComponent as Glass } from '../../../assets/icons/glass-desc.svg';
import { ReactComponent as Pencil } from '../../../assets/icons/pencil-square.svg';
import { ReactComponent as Bucket } from '../../../assets/icons/bucket.svg';

const waterportions = [
  { id: 'id-1', ml: '250', time: '7.00' },
  { id: 'id-2', ml: '200', time: '8.00' },
  { id: 'id-3', ml: '200', time: '10.00' },
  { id: 'id-4', ml: '175', time: '11.30' },
  { id: 'id-5', ml: '250', time: '12.00' },
];

const WaterPortionsList = () => {
  //   const dispatch = useDispatch();
  //   const filteredcontacts = useSelector(selectVisibleContacts);

  return (
    <PortionsList>
      <ScrollableDiv>
        {waterportions.map(item => (
          <Portions key={item.id}>
            <Glass />
            <Portion>{item.ml}ml</Portion>
            <Time>{item.time}AM</Time>
            <Edit>
              <Button>
                <Pencil />
              </Button>
              <Button>
                <Bucket />
              </Button>
            </Edit>
            {/* <Button onClick={() => dispatch(deleteContact(item.id))}>
              Delete
            </Button> */}
          </Portions>
        ))}
      </ScrollableDiv>
      <Addwater>+ Add water</Addwater>
    </PortionsList>
  );
};
export default WaterPortionsList;
