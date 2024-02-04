import styled from "styled-components";
import BottleSing from "assets/images/bottle-sign-in-desk.png";
import BubbleFon from "assets/images/bubble-desktop.png";

export const StyledMainContainer = styled.div`
   background-position: center 28px;
 background-image: url(${BottleSing}), url(${BubbleFon});
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -2;

  @media screen and (min-width: 768px) {
   background-image: url(${BottleSing}), url(${BubbleFon});
    background-position: center 0px;
  }

  @media screen and (min-width: 1440px) {
   background-image: url(${BottleSing}), url(${BubbleFon});
    background-size: 100%;
    background-size: contain;
    background-repeat: repeat;
  }
`;

export const StyledLoginPage = styled.div`
  height: 90vh;
background-image: url(${BottleSing}), url(${BubbleFon});
  @media screen and (min-width: 768px) {
    height: 92vh;
    background-image: url(${BottleSing}), url(${BubbleFon});
  }
  
.block-right{
   width: 100%;
  width: 320px;
  margin: 0 auto;
  padding: 0 20px;

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0 32px;
    z-index: -2;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 0 18px;
  }
}
 
`;
