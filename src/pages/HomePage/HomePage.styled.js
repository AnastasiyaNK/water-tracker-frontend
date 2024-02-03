import styled from 'styled-components';
import imgFon from '../../assets/images/bubble-desktop.png';
import imgBotle from '../../assets/images/botle-home-desc.png';
import imgFonMobile from '../../assets/images/bubble-home-mob.png';
import imgBotleMobile from '../../assets/images/bottle-home-mob.png';
import imgFonTab from '../../assets/images/bubble-home-tab.png';
import imgBotleTab from '../../assets/images/bottle-home-tab.png';

export const Fon = styled.div`
  width: 100%;
  padding: 8px 0;
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  align-items: center;
  gap: 40px;
  background-image: url(${imgFonMobile}), url(${imgBotleMobile});
  background-repeat: no-repeat;
  background-position: center, center 65px;

  @media (min-width: 320px) and (max-width: 767px) {
    min-width: 280px;
  }

  @media screen and (max-width: 767px) and (-webkit-min-device-pixel-ratio: 2),
    (max-width: 767px) and (min-resolution: 192dpi) {
    background-image: url(${imgFonMobile}), url(${imgBotleMobile});
    background-position: center, center 80px;
    display: flex;
    flex-direction: column;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    background-image: url(${imgFonTab}), url(${imgBotleTab});
    background-position: center, center 30px;
    display: flex;
    flex-direction: column;
  }

  @media screen and (min-width: 768px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 768px) and (min-resolution: 192dpi) {
    background-image: url(${imgFonTab}), url(${imgBotleTab});
    background-position: center, center 30px;
    display: flex;
    flex-direction: column;
    margin-top: 22px;
    gap: 32px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 1216px;
    background-image: url(${imgFon}), url(${imgBotle});
    background-position: center, left 65px;
    display: flex;
    flex-direction: row;
    margin-top: 22px;
    gap: 32px;
  }

  @media screen and (min-width: 1440px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 1440px) and (min-resolution: 192dpi) {
    background-image: url(${imgFon}), url(${imgBotle});
    background-position: center, left 65px;
    display: flex;
    flex-direction: row;
    margin-top: 22px;
    gap: 32px;
  }
`;

export const DailyRangeStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 232px;
  padding: 0px 20px 0px 20px;
  z-index: 2;

  @media screen and (max-width: 767px) and (-webkit-min-device-pixel-ratio: 2),
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
    padding-top: 24px;
    padding: 74px 30px 74px 40px;
    gap: 474px;
  }

  @media screen and (min-width: 1440px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 1440px) and (min-resolution: 192dpi) {
  }
`;
