import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectUserDailyNorma } from "../../../redux/user/userSelectors.js";
import { setDailyNormaModal } from "../../../redux/modal/modalsReduser.js";
import { DailyNormaBox, EditWater, Edit, Water } from "./DailyNorma.styled";

const DailyNorma = () => {
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
