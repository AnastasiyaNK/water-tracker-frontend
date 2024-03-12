import { useState } from "react";
import { Modal } from "components";
import { format } from "date-fns";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { StyledWaterForm } from "./AddWaterModal.styled";
import { apiAddWaterPortion } from "../../redux/water/waterSlice";
import { closeAllModals } from "../../redux/modal/modalsReduser";
import { ReactComponent as IconMinus } from "../../assets/icons/minus-small.svg";
import { ReactComponent as IconPlus } from "../../assets/icons/plus-small.svg";
import { addWaterSchema, addWaterSchemaUK } from "services/schemes/addWaterSchema";
import { useTranslation } from "react-i18next";

const WATER_AMOUNT_DIFFERENCE = 20;

const AddWaterModal = () => {
  const dispatch = useDispatch();

  const { t, i18n } = useTranslation();
  const localeSchema = { en: addWaterSchema, uk: addWaterSchemaUK };
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
      date: `${format(new Date(), "HH")}:${format(new Date(), "mm")}`,
    },
    validationSchema: localeSchema[i18n.language],
    onSubmit: (values) => {
      dispatch(apiAddWaterPortion(values))
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

  const handleAddWaterAmount = () => {
    const number = Number.parseInt(waterAmount) + WATER_AMOUNT_DIFFERENCE;
    setFieldValue("waterAmount", number.toString());
  };
  const handleReduceWaterAmount = () => {
    const number = Number.parseInt(waterAmount) - WATER_AMOUNT_DIFFERENCE;
    setFieldValue("waterAmount", number <= 0 ? "0" : number.toString());
  };
  return (
    <Modal styledClass="modal-wrapper" title={t("addWaterTitle")}>
      <StyledWaterForm onSubmit={handleSubmit}>
        <div className="choose-water-value-container">
          <p className="choose-title">{t("addWaterChoose")}</p>
          <p className="water-amount">{t("waterAmount")}</p>
          <div className="water-controls-container">
            <button
              onClick={handleReduceWaterAmount}
              className="water-control-btn"
              type="button"
            >
              <IconMinus className="svg-btn" />{" "}
            </button>
            <span className="water-amount-value">
              {waterAmount}
              {t("ml")}
            </span>
            <button
              onClick={handleAddWaterAmount}
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

export default AddWaterModal;
