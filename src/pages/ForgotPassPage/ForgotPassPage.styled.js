import styled from "styled-components";
import BottleSing from "assets/images/bottle-sign-in-desk.png";

import BubbleFon from "assets/images/bubble-desktop.png";

export const StyledForgotPassWrapper = styled.div`
  background-repeat: no-repeat;
  background-position-y: 95%;
  min-height: calc(100vh - 120px);

  @media screen and (max-width: 1439px) {
    min-height: calc(100vh - 61px);

    background-image: url(${BottleSing}), url(${BubbleFon});

    background-repeat: no-repeat;
    background-size: contain, cover;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    background-size: 736px;
    background-position-x: 100%;
    background-position-y: 75%;
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${BottleSing}), url(${BubbleFon});
  }
`;
