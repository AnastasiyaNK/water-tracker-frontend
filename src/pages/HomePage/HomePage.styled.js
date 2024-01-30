import styled from 'styled-components';
import imgFon from '../../assets/images/bubble-desktop.png';
import imgBotle from '../../assets/images/botle-home-desc.png';
import imgFonMobile from '../../assets/images/bubble-home-mob.png';
import imgBotleMobile from '../../assets/images/bottle-home-mob.png';
import imgFonTab from '../../assets/images/bubble-home-tab.png';
import imgBotleTab from '../../assets/images/bottle-home-tab.png';

export const Fon = styled.div`
  background-image: url(${imgFonMobile}), url(${imgBotleMobile});
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  gap: 40px;
  background-repeat: no-repeat;
  background-position: top, 35px 65px;

  @media screen and (max-width: 767px) and (-webkit-min-device-pixel-ratio: 2),
    (max-width: 767px) and (min-resolution: 192dpi) {
    background-image: url(${imgFonMobile}), url(${imgBotleMobile});
    background-position: top, 35px 65px;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    background-image: url(${imgFonTab}), url(${imgBotleTab});
    background-position: top, 120px 0px;
  }

  @media screen and (min-width: 768px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 768px) and (min-resolution: 192dpi) {
    background-image: url(${imgFonTab}), url(${imgBotleTab});

    flex-direction: row;
    margin-top: 22px;
    gap: 32px;
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${imgFon}), url(${imgBotle});
  }

  @media screen and (min-width: 1440px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 1440px) and (min-resolution: 192dpi) {
    background-image: url(${imgFon}), url(${imgBotle});
  }
`;

export const DailyRangeStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 232px;
  padding: 0px 20px 0px 20px;

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
