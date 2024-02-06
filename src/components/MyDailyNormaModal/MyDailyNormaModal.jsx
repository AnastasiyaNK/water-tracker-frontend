import React, { useState, useEffect } from "react";
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

import { useDispatch } from "react-redux";
import { setDailyNormaModal } from "../../redux/modalsReduser"
import Modal from "../Modal/Modal";
import { updateMyDailyNorma } from "../../redux/userSlice";

const MyDailyNormaModal = () => {
  const [gender, setGender] = useState("female");
  const [weight, setWeight] = useState("");
  const [hours, setHours] = useState("");
  const [yourAmountWater, setYourAmountWater] = useState("");
  const [dailyNorma, setDailyNorma] = useState(2);

  const dispatch = useDispatch();


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

    dispatch(setDailyNormaModal(false))

  };

  return (
    <Modal title="My daily norma" styledClass="daily-norma">
      <Form onSubmit={handleSave}>
        <TitleGender>
          <TitleGenderList>For girl:</TitleGenderList>
          <CalculatorWater>V=(M*0,03) + (T*0,4)</CalculatorWater>
          <TitleGenderList>For man:</TitleGenderList>
          <CalculatorWater>V=(M*0,04) + (T*0,6)</CalculatorWater>
        </TitleGender>
        <TitleContent>
          <TitleContentWater>
            <TitleText>*</TitleText> V is the volume of the water norm in liters
            per day, M is your body weight, T is the time of active sports, or
            another type of activity commensurate in terms of loads (in the
            absence of these, you must set 0)
          </TitleContentWater>
        </TitleContent>

        <div>
          <SecondaryTitle>Calculate your rate:</SecondaryTitle>
          <ListGender>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={gender === "female"}
                onChange={handleGenderChange}
              />
              <GenderName>For woman</GenderName>
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={gender === "male"}
                onChange={handleGenderChange}
              />
              <GenderName>For man</GenderName>
            </label>
          </ListGender>
          <div>
            <StatisticsCalculete>Your weight in kilograms:</StatisticsCalculete>
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
            <StatisticsCalculete>
              The time of active participation in sports or other activities
              with a high physical. load in hours:
            </StatisticsCalculete>
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
              The required amount of water in liters per day:{" "}
              <StatisticsWatarDay>{dailyNorma} L</StatisticsWatarDay>
            </StatisticsCalculete>
          </div>
        </div>
        <div>
          <SecondarySubtitle>
            Write down how much water you will drink:
          </SecondarySubtitle>
          <label>
            <MainInputBtn
              type="number"
              placeholder="0"
              value={yourAmountWater}
              onChange={handleAmountWaterChange}
            />
          </label>
        </div>
        <SettingsSubmitBtn type="submit">Save</SettingsSubmitBtn>
      </Form>
    </Modal>
  );
};

export default MyDailyNormaModal;
