import styled from "styled-components";

import backgroundMobile from "../../../assets/images/background-main-mob.png";
import backgroundTablet from "../../../assets/images/background-main-tab.png";
import backgroundDesktop from "../../../assets/images/background-main-desk.png";
import bg_dt1x from "../../../assets/images/bubble-desktop.png";

export const WelcomeContainer = styled.div`
  background-image: url(${backgroundMobile});
  background-size: contain;
  background-size: 100%;
  background-position: center bottom;
  background-repeat: no-repeat;

  @media screen and (max-width: 767px) and (-webkit-min-device-pixel-ratio: 2),
    (max-width: 767px) and (min-resolution: 192dpi) {
    background-image: url(${backgroundMobile});
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    background-image: url(${backgroundTablet});
  }

  @media screen and (min-width: 768px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 768px) and (min-resolution: 192dpi) {
    background-image: url(${backgroundTablet});
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${backgroundDesktop}), url(${bg_dt1x});
  }

  @media screen and (min-width: 1440px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 1440px) and (min-resolution: 192dpi) {
    background-image: url(${backgroundDesktop}), url(${bg_dt1x});
  }
`;
