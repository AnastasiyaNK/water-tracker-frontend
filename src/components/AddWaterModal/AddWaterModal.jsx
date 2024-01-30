import { Modal } from "components";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { StyledWaterForm } from "./AddWaterModal.styled";
import { ReactComponent as IconMinus } from "../../assets/icons/minus-small.svg";
import { ReactComponent as IconPlus } from "../../assets/icons/plus-small.svg";

const WATER_AMOUNT_DIFFERENCE = 20;

const addWaterValidationSchema = Yup.object({
  waterAmount: Yup.string()
    .max(15, "Must be 15 characters or less")
    .matches(/\d{2,}/g)
    .required("Required"),
  date: Yup.string()
    .matches(/^(\d{2}:\d{2})$/, {
      message: "Entered date must match following format hh:mm (10:25)",
    })
    .required("Required"),
});

const AddWaterModal = ({ toggleModal }) => {
  const currentDate = new Date();
  const [localWaterAmount, setLocalWaterAmount] = useState(250);
  const {
    handleChange,
    handleSubmit,
    values: { date, waterAmount },
    errors,
    setFieldValue,
  } = useFormik({
    initialValues: {
      waterAmount: "250",
      date: `${currentDate.getHours()}:${currentDate.getMinutes()}`,
    },
    validationSchema: addWaterValidationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const handleBlur = () => {
    setFieldValue("waterAmount", localWaterAmount.toString());
  };

  const handleAddWaterAmount = () => {
    const number = Number.parseInt(waterAmount) + WATER_AMOUNT_DIFFERENCE;
    console.log(waterAmount, number);
    setFieldValue("waterAmount", number.toString());
  };
  const handleReduceWaterAmount = () => {
    const number = Number.parseInt(waterAmount) - WATER_AMOUNT_DIFFERENCE;
    setFieldValue("waterAmount", number <= 0 ? "0" : number.toString());
  };
  return (
    <Modal title="Add water" toggleModal={toggleModal}>
      <StyledWaterForm onSubmit={handleSubmit} className="add-water-container">
        <div className="choose-water-value-container">
          <p className="choose-title">Choose a value:</p>
          <p className="water-amount">Amount of water:</p>
          <div className="water-controls-container">
            <button
              onClick={handleReduceWaterAmount}
              className="water-control-btn"
              type="button"
            >
              <IconMinus className="svg-btn" />{" "}
            </button>
            <span className="water-amount-value">{waterAmount}ml</span>
            <button
              onClick={handleAddWaterAmount}
              className="water-control-btn"
              type="button"
            >
              <IconPlus className="svg-btn" />{" "}
            </button>
          </div>
          <label className="input-group">
            <span className="input-group-text">Recording time:</span>
            <input
              value={date}
              onChange={handleChange}
              name="date"
              type="text"
              className="input-group-input"
            />
            {errors.date ? <div>{errors.date}</div> : null}
          </label>
          <label className="input-group">
            <h3 className="input-group-text bold">
              Enter the value of the water used:
            </h3>{" "}
            <input
              onBlur={handleBlur}
              value={localWaterAmount}
              onChange={({ target: { value } }) =>
                setLocalWaterAmount(Number.parseInt(value))
              }
              type="text"
              className="input-group-input"
            />
            {errors.waterAmount ? <div>{errors.waterAmount}</div> : null}
          </label>
          <div className="form-action-container">
            <span className="form-action-water-value">{waterAmount}ml</span>
            <button
              disabled={Object.keys(errors).length > 0}
              type="submit"
              className="form-save-btn"
            >
              Save
            </button>
          </div>
        </div>
      </StyledWaterForm>
    </Modal>
  );
};

export default AddWaterModal;
