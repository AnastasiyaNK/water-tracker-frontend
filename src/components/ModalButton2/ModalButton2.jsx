import EditWaterModal from "components/EditWaterModal/EditWaterModal";
import { StyledModalButton } from "components/ModalButton/ModalButton.styled";
import React, { useState } from "react";

const ModalButton2 = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <StyledModalButton>
      <div>
        <button className="open-modal-btn" onClick={() => setIsOpenModal(true)}>
          Open modal 2
        </button>
        {isOpenModal && <EditWaterModal toggleModal={setIsOpenModal} />}
      </div>
    </StyledModalButton>
  );
};

export default ModalButton2;
