import { StyledModalButton } from "./ModalButton.styled";
import { useDispatch } from "react-redux";
import { setAddWaterModal } from "../../redux/modal/modalsReduser";
import { ReactComponent as IconPlus } from "../../assets/icons/plus-circle.svg";

const ModalButton = () => {
  const dispatch = useDispatch();

  return (
    <StyledModalButton onClick={() => dispatch(setAddWaterModal(true))}>
      <IconPlus />
      Add Water
    </StyledModalButton>
  );
};

export default ModalButton;
