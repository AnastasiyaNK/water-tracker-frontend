import { StyledModalButton2 } from "components/ModalButton2/ModalButton2.styled";
import React from "react";
import { useDispatch } from "react-redux";
import { setEditModal } from "../../redux/modalsReduser";

const ModalButton2 = () => {
  const dispatch = useDispatch();
  return (
    <StyledModalButton2>
      <div>
        <button
          className="hidden open-modal-btn "
          onClick={() => dispatch(setEditModal(true))}
        >
          Edit Water
        </button>
      </div>
    </StyledModalButton2>
  );
};

export default ModalButton2;
