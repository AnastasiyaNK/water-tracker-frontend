import { StyledModalButton } from "./ModalButton.styled";
import { useDispatch } from "react-redux";
import { setAddWaterModal } from "../../redux/modal/modalsReduser";

const ModalButton = () => {
  const dispatch = useDispatch();
  return (
    <StyledModalButton>
      <div>
        <button
          className="open-modal-btn"
          onClick={() => dispatch(setAddWaterModal(true))}
        >
          + Add Water
        </button>
      </div>
    </StyledModalButton>
  );
};

export default ModalButton;
