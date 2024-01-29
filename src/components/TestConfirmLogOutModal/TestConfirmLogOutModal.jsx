import React from "react";
import { StyledConfirmModalContent } from "./styled";
import { Modal } from "components";

const TestConfirmLogOutModal = ({ toggleModal }) => {
  return (
    <Modal title="Delete entry" toggleModal={toggleModal}>
      <StyledConfirmModalContent>
        <p>Tou sure?</p>
        <button>Yes</button>
        <button className="cancelBtn">Cancel</button>
      </StyledConfirmModalContent>
    </Modal>
  );
};

export default TestConfirmLogOutModal;
