import styled from 'styled-components';

export const MonthBox = styled.div`
  width: 264px;
  height: 506px;

  @media screen and (max-width: 767px) and (-webkit-min-device-pixel-ratio: 2),
    (max-width: 767px) and (min-resolution: 192dpi) {
    width: 264px;
    height: 506px;
  }
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    width: 646px;
    height: 292px;
  }
  @media screen and (min-width: 768px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 768px) and (min-resolution: 192dpi) {
    width: 646px;
    height: 292px;
  }
  @media screen and (min-width: 1440px) {
    width: 538px;
    height: 284px;
  }

  @media screen and (min-width: 1440px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 1440px) and (min-resolution: 192dpi) {
    width: 538px;
    height: 284px;
  }
`;

export const Title = styled.p`
  color: var(--Primery-Color-Black, #2f2f2f);
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;

  @media screen and (max-width: 767px) and (-webkit-min-device-pixel-ratio: 2),
    (max-width: 767px) and (min-resolution: 192dpi) {
  }
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    font-size: 26px;
    font-style: normal;
    font-weight: 500;
    line-height: 32px;
  }
  @media screen and (min-width: 768px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 768px) and (min-resolution: 192dpi) {
    font-size: 26px;
    line-height: 32px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 26px;
    font-weight: 500;
    line-height: 32px;
  }

  @media screen and (min-width: 1440px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 1440px) and (min-resolution: 192dpi) {
    font-size: 26px;
    font-weight: 500;
    line-height: 32px;
  }
`;
