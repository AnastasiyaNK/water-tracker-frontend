import React from 'react';

import { useSelector } from 'react-redux';

import { selectUserDailyNorma } from '../../../redux/selectors.js';

import { DailyNormaBox, EditWater, Edit, Water } from './DailyNorma.styled';
import { useDispatch } from 'react-redux';
import { setDailyNormaModal } from '../../../redux/modalsReduser';

const DailyNorma = ({ toggleModal }) => {
  const dispatch = useDispatch(setDailyNormaModal);
  const myDailyNorma = useSelector(selectUserDailyNorma);

  return (
    <DailyNormaBox>
      <p> My daily norma</p>
      <EditWater>
        <Water>{myDailyNorma}L</Water>
        <Edit onClick={() => dispatch(setDailyNormaModal(true))}>Edit</Edit>
      </EditWater>
    </DailyNormaBox>
  );
};

export default DailyNorma;
