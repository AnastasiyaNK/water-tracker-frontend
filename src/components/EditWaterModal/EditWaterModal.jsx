import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { format } from "date-fns";
import { Modal } from "components";
import { StyledWaterForm } from "components/EditWaterModal/EditWaterModal.styled";
import { selectSelectedWaterPortionId } from "../../redux/modal/modalsSelectors";
import { getLocaleTime } from "../../services/getLocaleTime";
import { selectNotes } from "../../redux/water/waterSelectors";
import { apiEditWaterPortion } from "../../redux/water/waterSlice";
import { closeAllModals } from "../../redux/modal/modalsReduser";

import { ReactComponent as IconMinus } from "../../assets/icons/minus-small.svg";
import { ReactComponent as IconPlus } from "../../assets/icons/plus-small.svg";
import { ReactComponent as WaterGlass } from "../../assets/icons/glass-desc 4.svg";
import { editWaterSchema, editWaterSchemaUK } from "services/schemes/editWaterSchema";
import { useTranslation } from "react-i18next";

const WATER_AMOUNT_DIFFERENCE = 20;

const EditWaterModal = () => {
  const { t, i18n } = useTranslation();
  const localeSchema = { en: editWaterSchema, uk: editWaterSchemaUK };
  const dispatch = useDispatch();
  const selectedWaterPortionId = useSelector(selectSelectedWaterPortionId);

  const waterVolumes = useSelector(selectNotes);
  const waterPortion = waterVolumes.find(
    (portion) => portion._id === selectedWaterPortionId
  );

  const [localWaterAmount, setLocalWaterAmount] = useState(
    waterPortion.waterAmount
  );
  const {
    handleChange,
    handleSubmit,
    values: { date, waterAmount },
    errors,
    setFieldValue,
  } = useFormik({
    initialValues: {
      waterAmount: waterPortion.waterAmount.toString(),
      // date: `${format(waterPortion.date, "kk")}:${format(
      //   waterPortion.date,
      //   "mm"
      // )}`,
      date: `${getLocaleTime(waterPortion.date)}`,
    },
    validationSchema: localeSchema[i18n.language],
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

    setFieldValue("waterAmount", number.toString());
  };

  const handleReduceWaterAmount = () => {
    const number = Number.parseInt(waterAmount) - WATER_AMOUNT_DIFFERENCE;
    setFieldValue("waterAmount", number <= 0 ? "0" : number.toString());
  };

  return (
    <Modal title={t("editWaterTitle")} styledClass="modal-wrapper">
      <StyledWaterForm onSubmit={handleSubmit} className="add-water-container">
        <div className="water-amount-time-container">
          <WaterGlass className="water-glass" />
          <span className="form-action-water-value glass-value-bold">
            {waterPortion.waterAmount}
            {t("ml")}
          </span>
          <span className="time-value">
            {format(waterPortion.date, "hh")}:{format(waterPortion.date, "mm")}{" "}
            {format(waterPortion.date, "a")}
          </span>
        </div>

        <div className="choose-water-value-container">
          <p className="choose-title">{t("editWaterCorrect")}</p>
          <p className="water-amount">{t("waterAmount")}</p>
          <div className="water-controls-container">
            <button
              onClick={handleReduceWaterAmount}
              className="water-control-btn"
              type="button"
            >
              <IconMinus className="svg-btn" />{" "}
            </button>
            <span className="water-amount-value-padding water-amount-value ">
              {waterAmount}
              {t("ml")}
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
            <span className="input-group-text">{t("waterTime")}</span>
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
            <h3 className="input-group-text bold">{t("waterEnter")}</h3>{" "}
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
            <span className="form-action-water-value">
              {waterAmount}
              {t("ml")}
            </span>
            <button
              disabled={Object.keys(errors).length > 0}
              type="submit"
              className="form-save-btn"
            >
              {t("saveBtn")}
            </button>
          </div>
        </div>
      </StyledWaterForm>
    </Modal>
  );
};

export default EditWaterModal;
