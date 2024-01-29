import { Modal } from "components";
import { StyledWaterForm } from "components/EditWaterModal/EditWaterModal.styled";
import React from "react";
import { ReactComponent as IconMinus } from "../../assets/icons/minus-small.svg";
import { ReactComponent as IconPlus } from "../../assets/icons/plus-small.svg";
import { ReactComponent as WaterGlass } from "../../assets/icons/Group 4.svg";

const EditWaterModal = ({ toggleModal }) => {
  return (
    <Modal title="Edit the entered amount of water" toggleModal={toggleModal}>
      <StyledWaterForm className="add-water-container">
        <div className="water-amount-time-container">
          <WaterGlass className="water-glass" />
          <span className="form-action-water-value glass-value-bold">
            250ml
          </span>
          <span className="time-value"> 7:10 AM</span>
        </div>
        <div className="choose-water-value-container">
          <p className="choose-title">Correct entered data:</p>
          <p className="water-amount">Amount of water:</p>
          <div className="water-controls-container">
            <button className="water-control-btn">
              {" "}
              <IconMinus className="svg-btn" />{" "}
            </button>
            <span className="water-amount-value-padding water-amount-value ">
              250ml
            </span>
            <button className="water-control-btn">
              {" "}
              <IconPlus className="svg-btn" />{" "}
            </button>
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
            <span className="form-action-water-value">250ml</span>
            <button className="form-save-btn">Save</button>
          </div>
        </div>
      </StyledWaterForm>
    </Modal>
  );
};

export default EditWaterModal;
