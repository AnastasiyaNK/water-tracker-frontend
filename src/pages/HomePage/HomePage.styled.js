import styled from "styled-components";
// import imgFon from "../../assets/images/bubble-desktop.png";
import imgBotle from "../../assets/images/botle-home-desc.png";
// import imgFonMobile from "../../assets/images/bubble-home-mob.png";
import imgBotleMobile from "../../assets/images/bottle-home-mob.png";
// import imgFonTab from "../../assets/images/bubble-home-tab.png";
import imgBotleTab from "../../assets/images/bottle-home-tab.png";

export const StyledHomePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const DailyRangeStyle = styled.div`
  /* display: flex;
  flex-direction: column;
  gap: 232px;
  padding: 0px 20px 0px 20px;
  z-index: 2; */

  /* @media screen and (max-width: 767px) and (-webkit-min-device-pixel-ratio: 2),
    (max-width: 767px) and (min-resolution: 192dpi) {
    padding-top: 0px;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    padding-top: 16px;
    padding: 32px 16px 32px 44px;
    gap: 334px;
  }

  @media screen and (min-width: 768px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 768px) and (min-resolution: 192dpi) {
    padding-top: 16px;
  }

  @media screen and (min-width: 1440px) {
    width: 592px;
    height: 680px;
    padding: 32px 0;
    gap: 474px;
  }

  @media screen and (min-width: 1440px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 1440px) and (min-resolution: 192dpi) {
    width: 592px;
    height: 680px;
    padding: 32px 0;
  } */
`;

export const DailyNormaWrapper = styled.div`
  width: 100%;
  height: 306px;

  background-image: url(${imgBotleMobile});
  background-repeat: no-repeat;
  background-position: right 0px bottom 16px;

  @media screen and (min-width: 768px) {
    height: 402px;
    background-image: url(${imgBotleTab});
    background-position: center;
  }

  @media screen and (min-width: 1440px) {
    height: 542px;
    background-image: url(${imgBotle});
    background-position: center;
  }
`;
