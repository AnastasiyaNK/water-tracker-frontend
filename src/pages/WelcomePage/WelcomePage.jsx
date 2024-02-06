import React, { useEffect } from "react";

import { WelcomeContainer } from "./WelcomePage.styled";
import { WelcomePageComponenet } from "components";
import { useDispatch } from "react-redux";
import { usersGoogleAuth } from "../../redux/userSlice";

const Main = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    if (token) {
      dispatch(usersGoogleAuth(token));
    }
  }, [dispatch]);

  return (
    <WelcomeContainer>
      <WelcomePageComponenet />
    </WelcomeContainer>
  );
};

export default Main;
