import React, { useState } from "react";
import { WaterTracker } from "components";
import { DailyNorma } from "components";
import { Fon } from "./HomePage.styled.js";

import { MyDailyNormaModal } from "components";

const HomePage = () => {
  const [isOpenDailyNorma, setIsOpenDailyNorma] = useState(false);

  return (
    <Fon>
      <DailyNorma toggleModal={setIsOpenDailyNorma} />
      <WaterTracker />

      {isOpenDailyNorma && (
        <MyDailyNormaModal toggleModal={setIsOpenDailyNorma} />
      )}
    </Fon>
  );
};

export default HomePage;
