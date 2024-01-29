import React from 'react';
import { DailyNormaBox, EditWater, Edit, Water } from './DailyNorma.styled';

const DailyNorma = ({toggleModal}) => {
  return (
    <DailyNormaBox>
      <p> My daily norma</p>
      <EditWater>
        <Water>1.5L</Water>
        <Edit onClick={()=>toggleModal(true)}>Edit</Edit>
      </EditWater>
    </DailyNormaBox>
  );
};

export default DailyNorma;
