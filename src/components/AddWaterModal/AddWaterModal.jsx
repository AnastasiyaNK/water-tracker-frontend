import { Modal } from "components";
import React from "react";
import { StyledWaterForm } from "./AddWaterModal.styled";

const AddWaterModal = ({ toggleModal }) => {
  return (
    <Modal title="Add water" toggleModal={toggleModal}>
      <StyledWaterForm className="add-water-container">
        <div className="choose-water-value-container">
          <p className="choose-title">Choose a value:</p>
          <p className="water-amount">Amount of water:</p>
          <div className="water-controls">
            <button className="water-control-btn">-</button>
            <span className="water-amount-value">50ml</span>
            <button className="water-control-btn">+</button>
          </div>
          <label className="input-group">
            <span className="input-group-text">Recording time:</span>
            <input type="text" className="input-group-input" />
          </label>
          <label className="input-group">
            <h3 className="input-group-text bold">
              Enter the value of the water used:
            </h3>{" "}
            <input type="text" className="input-group-input" />
          </label>
          <div className="form-action-container">
            <span className="form-action-water-value">50ml</span>
            <button className="form-save-btn">Save</button>
          </div>
        </div>
      </StyledWaterForm>
    </Modal>
  );
};

export default AddWaterModal;
