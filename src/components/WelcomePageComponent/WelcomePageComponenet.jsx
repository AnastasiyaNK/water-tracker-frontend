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
        <p className="welcomeInfoTitle">{t("welcomeInfoTitle")}</p>
        <h2 className="welcomeListTitle">{t("welcomeListTitle")}</h2>
        <ul className="welcomeListContent">
          <li className="welcomeListItems">
            <HabitDriveImg />
            <p>{t("welcomeList")}</p>
          </li>
          <li className="welcomeListItems">
            <ViewStatisticsImg />
            <p>{t("welcomeList1")}</p>
          </li>
          <li className="welcomeListItems">
            <PersonalRateSettingImg />
            <p>{t("welcomeList2")}</p>
          </li>
        </ul>
        <Link to={ROUTE_PATH.signup} className="welcomeButton">
          {t("link")}
        </Link>
      </div>
      <div className="containerDrinkInfo">
        <p className="drinkInfoTitle">{t("drinkInfo")}</p>
        <ul className="drinkInfoList">
          <li className="drinkInfoItems">{t("drinkItems1")}</li>
          <li className="drinkInfoItems">{t("drinkItems2")}</li>
          <li className="drinkInfoItems">{t("drinkItems3")}</li>
          <li className="drinkInfoItems">{t("drinkItems4")}</li>
          <li className="drinkInfoItems">{t("drinkItems5")}</li>
          <li className="drinkInfoItems">{t("drinkItems6")}</li>
          <li className="drinkInfoItems">{t("drinkItems7")}</li>
        </ul>
      </div>
    </WelcomeContainer>
  );
};

export default WelcomePageComponent;
