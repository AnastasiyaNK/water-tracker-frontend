import styled from "styled-components";
import imgBotle from "../../assets/images/botle-home-desc.png";
import imgBotleMobile from "../../assets/images/bottle-home-mob.png";
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

export const DailyRangeStyle = styled.div``;

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
