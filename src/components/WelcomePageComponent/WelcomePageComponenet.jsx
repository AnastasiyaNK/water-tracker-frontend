import { Link } from "react-router-dom";
import {
  WelcomeContainer,
  HabitDriveImg,
  ViewStatisticsImg,
  PersonalRateSettingImg,
} from "./WelcomePage.styled";
import { useTranslation } from "react-i18next";
import { ROUTE_PATH } from "constants/routes";

const WelcomePageComponent = () => {
  const { t } = useTranslation();

  

  return (
    <WelcomeContainer>
      <div className="containerBenefits">
       
        <h1 className="welcomeTitle">{t("welcomePageTitle")}</h1>
        <p className="welcomeInfoTitle">Record daily water intake and track</p>
        <h2 className="welcomeListTitle">Tracker Benefits</h2>
        <ul className="welcomeListContent">
          <li className="welcomeListItems">
            <HabitDriveImg />
            <p>Habit drive</p>
          </li>
          <li className="welcomeListItems">
            <ViewStatisticsImg />
            <p>View statistics</p>
          </li>
          <li className="welcomeListItems">
            <PersonalRateSettingImg />
            <p>Personal rate setting</p>
          </li>
        </ul>
        <Link to={ROUTE_PATH.signup} className="welcomeButton">
          Try tracker
        </Link>
      </div>
      <div className="containerDrinkInfo">
        <p className="drinkInfoTitle">Why drink water</p>
        <ul className="drinkInfoList">
          <li className="drinkInfoItems">Supply of nutrients to all organs</li>
          <li className="drinkInfoItems">Providing oxygen to the lungs</li>
          <li className="drinkInfoItems">Maintaining the work of the heart</li>
          <li className="drinkInfoItems">Release of processed substances</li>
          <li className="drinkInfoItems">
            Ensuring the stability of the internal environment
          </li>
          <li className="drinkInfoItems">
            Maintaining within the normal temperature
          </li>
          <li className="drinkInfoItems">
            Maintaining an immune system capable of resisting disease
          </li>
        </ul>
      </div>
    </WelcomeContainer>
  );
};

export default WelcomePageComponent;
