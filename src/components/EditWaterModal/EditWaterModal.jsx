import { Modal } from "components";
import { StyledWaterForm } from "components/EditWaterModal/EditWaterModal.styled";
import React, { useState } from "react";
import { useFormik } from "formik";
import { format } from "date-fns";
import * as Yup from "yup";

import { ReactComponent as IconMinus } from "../../assets/icons/minus-small.svg";
import { ReactComponent as IconPlus } from "../../assets/icons/plus-small.svg";
import { ReactComponent as WaterGlass } from "../../assets/icons/glass-desc 4.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectSelectedWaterPortionId } from "../../redux/selectors";
import { selectTodayWaterData } from "../../redux/water/waterSlice.selectors";
import { apiEditWaterPortion } from "../../redux/water/waterSlice";
import { closeAllModals } from "../../redux/modalsReduser";
import { selectNotes } from '../../redux/selectors';

const WATER_AMOUNT_DIFFERENCE = 20;

const editWaterValidationSchema = Yup.object({
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

const EditWaterModal = () => {
  const dispatch = useDispatch();
  const selectedWaterPortionId = useSelector(selectSelectedWaterPortionId);
  // const waterData = useSelector(selectTodayWaterData);
  const waterVolumes = useSelector(selectNotes)
  const waterPortion = waterVolumes.find(
    (portion) => portion._id === selectedWaterPortionId
  );
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
      date: `${format(waterPortion.date, "kk")}:${format(
        waterPortion.date,
        "mm"
      )}`,
    },
    validationSchema: editWaterValidationSchema,
    onSubmit: (values) => {
      dispatch(
        apiEditWaterPortion({
          portionId: selectedWaterPortionId,
          formData: values,
        })
      )
        .unwrap()
        .then(() => {
          dispatch(closeAllModals());
        });
    },
  });

  const handleBlur = () => {
    setFieldValue(
      "waterAmount",
      localWaterAmount ? localWaterAmount.toString() : "0"
    );
  };

  const handleEditWaterAmount = () => {
    const number = Number.parseInt(waterAmount) + WATER_AMOUNT_DIFFERENCE;
    console.log(waterAmount, number);
    setFieldValue("waterAmount", number.toString());
  };

  const handleReduceWaterAmount = () => {
    const number = Number.parseInt(waterAmount) - WATER_AMOUNT_DIFFERENCE;
    setFieldValue("waterAmount", number <= 0 ? "0" : number.toString());
  };

  return (
    <Modal title="Edit the entered amount of water" styledClass="modal-wrapper">
      <StyledWaterForm onSubmit={handleSubmit} className="add-water-container">
        <div className="water-amount-time-container">
          <WaterGlass className="water-glass" />
          <span className="form-action-water-value glass-value-bold">
            {waterPortion.waterAmount}ml
          </span>
          <span className="time-value">
            {format(waterPortion.date, "hh")}:{format(waterPortion.date, "mm")}{" "}
            {format(waterPortion.date, "a")}
          </span>
        </div>

        <div className="choose-water-value-container">
          <p className="choose-title">Correct entered data:</p>
          <p className="water-amount">Amount of water:</p>
          <div className="water-controls-container">
            <button
              onClick={handleReduceWaterAmount}
              className="water-control-btn"
              type="button"
            >
              <IconMinus className="svg-btn" />{" "}
            </button>
            <span className="water-amount-value-padding water-amount-value ">
              {waterAmount}ml
            </span>
            <button
              onClick={handleEditWaterAmount}
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
              type="number"
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

export default EditWaterModal;
