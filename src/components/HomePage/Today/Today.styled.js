import styled from 'styled-components';

export const TodayBox = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  /* width: 534px;
  height: 260px; */
  color: var(--Primery-Color-Black, #2f2f2f);
  font-family: Roboto;
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;

  @media screen and (max-width: 767px) and (-webkit-min-device-pixel-ratio: 2),
    (max-width: 767px) and (min-resolution: 192dpi) {
    width: 256px;
    gap: 16px;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    width: 646px;
    height: 276px;
    gap: 24px;
  }

  @media screen and (min-width: 768px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 768px) and (min-resolution: 192dpi) {
    width: 646px;
    height: 276px;
    gap: 24px;
  }

  @media screen and (min-width: 1440px) {
    width: 544px;
    height: 260px;
    gap: 24px;
  }

  @media screen and (min-width: 1440px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 1440px) and (min-resolution: 192dpi) {
    width: 544px;
    height: 260px;
    gap: 24px;
  }
`;

export const TodayStile = styled.p`
  width: 72px;
`;
