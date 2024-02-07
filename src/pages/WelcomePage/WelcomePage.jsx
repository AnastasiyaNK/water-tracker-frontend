import React, { useEffect } from "react";

import { WelcomeContainer } from "./WelcomePage.styled";
import { WelcomePageComponenet } from "components";
import { useDispatch } from "react-redux";
import { usersGoogleAuth } from "../../redux/userSlice";

const Main = () => {
  const dispatch = useDispatch();
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get("token");

  useEffect(() => {
    if (!token) {
      return;
    }
    dispatch(usersGoogleAuth(token));
  }, [dispatch, token]);

  return (
    <WelcomeContainer>
      <WelcomePageComponenet />
    </WelcomeContainer>
  );
};

export default Main;
