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
