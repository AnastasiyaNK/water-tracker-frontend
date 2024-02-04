import styled from "styled-components";
import BottleSing from "assets/images/bottle-sign-in-desk.png";
import BubbleFon from "assets/images/bubble-desktop.png";

export const StyledLoginPage = styled.div`
  height: 90vh;
background-image: url(${BottleSing}), url(${BubbleFon});
  @media screen and (min-width: 768px) {
    height: 92vh;
    background-image: url(${BottleSing}), url(${BubbleFon});
  }
  

  .block-right {
    position: relativ;
  }
`;
