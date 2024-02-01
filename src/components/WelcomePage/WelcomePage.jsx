import { useNavigate } from "react-router-dom";
import {
  WelcomeContainer,
  HabitDriveImg,
  ViewStatisticsImg,
  PersonalRateSettingImg,
} from "./WelcomePage.styled";

const WelcomePage = () => {
  const navigate = useNavigate();

  function TryClick() {
    navigate("/signup");
  }

  return (
    <WelcomeContainer>
      <div className="containerBenefits">
        <h2 className="welcomeTitle">Water consumption tracker</h2>
        <p className="welcomeInfoTitle">Record daily water intake and track</p>
        <h3 className="welcomeListTitle">Tracker Benefits</h3>
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
        <button className="welcomeButton" type="button" onClick={TryClick}>
          Try tracker
        </button>
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

export default WelcomePage;
