import styled from "styled-components";
import BottleSing from "assets/images/bottle-sign-in-desk.png";
import BottleSingTab from "assets/images/bottle-sign-in-tab.png";
import BottleSingMob from "assets/images/bottle-sign-in-mob.png";
import BubbleFon from "assets/images/bubble-desktop.png";
import BubbleFonMob from "assets/images/bubble-sign-in-mob.png";

export const StyledLoginPage = styled.div`
  min-height: calc(100vh - 120px);
  background-repeat: no-repeat;
  background-position: bottom;
  /* background-size: contain; */
  /* background-image: url(${BottleSingMob}), url(${BubbleFonMob}); */

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    background-image: url(${BottleSingTab});
  }

  @media screen and (max-width: 1439px) {
    min-height: calc(100vh - 76px);
    background-image: url(${BottleSing}), url(${BubbleFon});

    background-repeat: no-repeat;
    background-size: contain;
  }

  /* .block-right {
    position: relativ;
  } */
`;
