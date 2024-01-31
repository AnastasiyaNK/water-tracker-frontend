import React from "react";
import { DailyNormaBox, EditWater, Edit, Water } from "./DailyNorma.styled";
import { useDispatch } from "react-redux";
import { setDailyNormaModal } from "../../../redux/modalsReduser";

const DailyNorma = ({ toggleModal }) => {
  const dispatch = useDispatch(setDailyNormaModal);
  return (
    <DailyNormaBox>
      <p> My daily norma</p>
      <EditWater>
        <Water>1.5L</Water>
        <Edit onClick={() => dispatch(setDailyNormaModal(true))}>Edit</Edit>
      </EditWater>
    </DailyNormaBox>
  );
};

export default DailyNorma;
