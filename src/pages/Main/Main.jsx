import React from "react";

import { WelcomeContainer } from "./Main.styled";
import { WelcomeTracker } from "../../components/WelcomePage/WelcomeTracker/WelcomeTracker";
import { WaterTrackerBenefits } from "../../components/WelcomePage/WaterTrackerBenefits/WaterTrackerBenefits";
import { DrinkInfo } from "../../components/WelcomePage/DrinkInfo/DrinkInfo";

const Main = () => {
  return (
    <WelcomeTracker>
      <WelcomeContainer>
        <WaterTrackerBenefits />
        <DrinkInfo />
      </WelcomeContainer>
    </WelcomeTracker>
  );
};

export default Main;
