import styled from "styled-components";
import imgFonMobile from "../../assets/images/bubble-home-mob.png";
import imgFonTab from "../../assets/images/bubble-home-tab.png";
import imgFonDesk from "../../assets/images/bubble-desktop.png";
import welcomeBackgroundMob from "../../assets/images/background-main-mob.png";
import welcomeBackgroundTab from "../../assets/images/background-main-tab.png";
import welcomeBackgroundDesk from "../../assets/images/background-main-desk.png";

import bottleSignInMob from "../../assets/images/bottle_sign_in_mob.png";
import bottleSignInTab from "../../assets/images/bottle_sign_in_tab.png";
import bottleSignInDesk from "../../assets/images/bottl_sign_in_desktop.png";
import BgSignInMob from "../../assets/images/bg_sign_in_mob.png";

export const StyledMain = styled.main`
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: 100%;

  @media screen and (max-width: 767px) {
    background-image: url(${welcomeBackgroundMob});
    background-size: cover;
    background-position: center -50px;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    background-image: url(${welcomeBackgroundTab});
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${imgFonDesk}), url(${welcomeBackgroundDesk});
    background-repeat: no-repeat;
    background-position: center 52px, center bottom;
  }

  &.register-backgroud {
    @media screen and (max-width: 767px) {
      background-image: url(${BgSignInMob}), url(${bottleSignInMob});
      background-repeat: no-repeat;
      background-size: cover, contain;
      background-position: center 40px, bottom;
    }

    @media screen and (min-width: 768px) and (max-width: 1439px) {
      background-image: url(${bottleSignInTab});
      background-position: bottom;
    }

    @media screen and (min-width: 1440px) {
      background-image: url(${imgFonDesk}), url(${bottleSignInDesk});
      background-position: center 0px, center left;
      background-size: contain, contain;
    }
  }

  &.homepage-backgroud {
    background-image: url(${imgFonMobile});
    background-repeat: no-repeat;
    background-position: center 52px;

    @media screen and (min-width: 768px) {
      background-image: url(${imgFonTab});
      background-position: center 24px;
    }

    @media screen and (min-width: 1440px) {
      background-image: url(${imgFonDesk});
      background-position: center 58px;
    }
  }
`;
