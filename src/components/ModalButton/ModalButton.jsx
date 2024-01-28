import { AddWaterModal } from "components";
import { StyledModalButton } from "./ModalButton.styled";
import React, { useState } from "react";

const ModalButton = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <StyledModalButton>
      <div>
        <button className="open-modal-btn" onClick={() => setIsOpenModal(true)}>
          Open modal
        </button>
        {isOpenModal && <AddWaterModal toggleModal={setIsOpenModal} />}
      </div>
    </StyledModalButton>
  );
};

export default ModalButton;
