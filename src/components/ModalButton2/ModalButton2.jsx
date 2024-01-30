import EditWaterModal from "components/EditWaterModal/EditWaterModal";
import { StyledModalButton2 } from "components/ModalButton2/ModalButton2.styled";
import React, { useState } from "react";

const ModalButton2 = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <StyledModalButton2>
      <div>
        <button
          className="hidden open-modal-btn "
          onClick={() => setIsOpenModal(true)}
        >
          Edit Water
        </button>
        {isOpenModal && <EditWaterModal toggleModal={setIsOpenModal} />}
      </div>
    </StyledModalButton2>
  );
};

export default ModalButton2;
