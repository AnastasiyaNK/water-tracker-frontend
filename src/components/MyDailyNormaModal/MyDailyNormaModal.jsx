import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Modal from "../Modal/Modal";
import {
  Form,
  TitleGender,
  TitleGenderList,
  CalculatorWater,
  TitleContent,
  TitleContentWater,
  TitleText,
  SecondaryTitle,
  ListGender,
  GenderName,
  StatisticsCalculete,
  StatisticsWatarDay,
  MainInput,
  SecondarySubtitle,
  MainInputBtn,
  SettingsSubmitBtn,
} from "./MyDailyNormaModal.styled";

import { setDailyNormaModal } from "../../redux/modal/modalsReduser";
import { updateMyDailyNorma } from "../../redux/user/userSlice";
import { useTranslation } from "react-i18next";

const MyDailyNormaModal = () => {
  const [gender, setGender] = useState("female");
  const [weight, setWeight] = useState("");
  const [hours, setHours] = useState("");
  const [yourAmountWater, setYourAmountWater] = useState("");
  const [dailyNorma, setDailyNorma] = useState(2);

  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    if (weight > 0) {
      const dailyNorma =
        gender === "female"
          ? weight * 0.03 + hours * 0.4
          : weight * 0.04 + hours * 0.6;

      setDailyNorma(Math.round(dailyNorma).toFixed(1));
    } else {
      setDailyNorma(2);
    }
  }, [gender, weight, hours]);

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleWeightChange = (e) => {
    setWeight(parseFloat(e.target.value));
  };

  const handleHoursChange = (e) => {
    setHours(parseFloat(e.target.value));
  };

  const handleAmountWaterChange = (e) => {
    setYourAmountWater(parseFloat(e.target.value));
  };

  const handleSave = async (e) => {
    e.preventDefault();

    const data = {
      dailyNorma: yourAmountWater > 0 ? yourAmountWater : dailyNorma,
    };

    await dispatch(updateMyDailyNorma(data));

    dispatch(setDailyNormaModal(false));
  };

  return (
    <Modal title={t("modalDailyTitle")} styledClass="daily-norma">
      <Form onSubmit={handleSave}>
        <TitleGender>
          <TitleGenderList>{t("dailyGender1")}</TitleGenderList>
          <CalculatorWater>V=(M*0,03) + (T*0,4)</CalculatorWater>
          <TitleGenderList>{t("dailyGender2")}</TitleGenderList>
          <CalculatorWater>V=(M*0,04) + (T*0,6)</CalculatorWater>
        </TitleGender>
        <TitleContent>
          <TitleContentWater>
            <TitleText>*</TitleText> {t("dailyText")}
          </TitleContentWater>
        </TitleContent>

        <div>
          <SecondaryTitle>{t("dailyCalculate")}</SecondaryTitle>
          <ListGender>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={gender === "female"}
                onChange={handleGenderChange}
              />
              <GenderName>{t("dailyWoman")}</GenderName>
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={gender === "male"}
                onChange={handleGenderChange}
              />
              <GenderName>{t("dailyMan")}</GenderName>
            </label>
          </ListGender>
          <div>
            <StatisticsCalculete>{t("dailyKilograms")}</StatisticsCalculete>
            <label>
              <MainInput
                type="number"
                placeholder="0"
                value={weight}
                onChange={handleWeightChange}
              />
            </label>
          </div>
          <div>
            <StatisticsCalculete>{t("calculeteTime")}</StatisticsCalculete>
            <label>
              <MainInput
                type="number"
                placeholder="0"
                value={hours}
                onChange={handleHoursChange}
              />
            </label>
          </div>
          <div>
            <StatisticsCalculete>
              {t("calculeteDay")}{" "}
              <StatisticsWatarDay>
                {dailyNorma} {t("litr")}
              </StatisticsWatarDay>
            </StatisticsCalculete>
          </div>
        </div>
        <div>
          <SecondarySubtitle>{t("dailyWillDrink")}</SecondarySubtitle>
          <label>
            <MainInputBtn
              type="number"
              placeholder="0"
              value={yourAmountWater}
              onChange={handleAmountWaterChange}
            />
          </label>
        </div>
        <SettingsSubmitBtn type="submit">{t("saveBtn")}</SettingsSubmitBtn>
      </Form>
    </Modal>
  );
};

export default MyDailyNormaModal;
