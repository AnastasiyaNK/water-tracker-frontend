import { useEffect } from "react";
import { WelcomePageComponenet } from "components";
import { useDispatch } from "react-redux";
import { usersGoogleAuth } from "../../redux/user/userSlice";
import { StyledMainContainer } from "styled";

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
    <StyledMainContainer className="welcome-container">
      <WelcomePageComponenet />
    </StyledMainContainer>
  );
};

export default Main;
