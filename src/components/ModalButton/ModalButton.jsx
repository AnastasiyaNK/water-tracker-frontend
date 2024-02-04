import { StyledModalButton } from "./ModalButton.styled";
import React from "react";
import { useDispatch } from "react-redux";
import { setAddWaterModal } from "../../redux/modalsReduser";

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
