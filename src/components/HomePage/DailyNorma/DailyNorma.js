import React from 'react';
import { DailyNormaBox, EditWater, Edit, Water } from './DailyNorma.styled';

const DailyNorma = () => {
  return (
    <div>
      <DailyNormaBox>
        <p> My daily norma</p>
        <EditWater>
          <Water>1.5L</Water>
          <Edit>Edit</Edit>
        </EditWater>
      </DailyNormaBox>
    </div>
  );
};

export default DailyNorma;
