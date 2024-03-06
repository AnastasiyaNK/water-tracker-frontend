import { useDispatch } from "react-redux";
import { setAddWaterModal } from "../../../redux/modal/modalsReduser";
import { StyledAddWatterBtn } from "./AddWatterButton.styled";
import { ReactComponent as IconPlus } from "../../../assets/icons/plus-small.svg";

const AddWaterButton = () => {
  const dispatch = useDispatch();

  return (
    <StyledAddWatterBtn onClick={() => dispatch(setAddWaterModal(true))}>
      <IconPlus />
      Add Water
    </StyledAddWatterBtn>
  );
};

export default AddWaterButton;
