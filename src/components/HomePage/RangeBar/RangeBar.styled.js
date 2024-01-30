import styled from 'styled-components';

export const RangBar = styled.div`
  height: 90px;
  @media screen and (max-width: 767px) and (-webkit-min-device-pixel-ratio: 2),
    (max-width: 767px) and (min-resolution: 192dpi) {
    width: 280px;
    height: 82px;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    width: 356px;
    height: 90px;
  }

  @media screen and (min-width: 768px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 768px) and (min-resolution: 192dpi) {
    width: 356px;
    height: 90px;
  }

  @media screen and (min-width: 1440px) {
    width: 391px;
    height: 90px;
  }

  @media screen and (min-width: 1440px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 1440px) and (min-resolution: 192dpi) {
    width: 391px;
    height: 90px;
  }
`;

export const Title = styled.div`
  margin-bottom: 8px;
  color: var(--Primery-Color-Blue, #407bff);
  text-align: center;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;

  @media screen and (max-width: 767px) and (-webkit-min-device-pixel-ratio: 2),
    (max-width: 767px) and (min-resolution: 192dpi) {
    margin-bottom: 19px;
    margin-left: 0;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    margin-bottom: 19px;
    text-align: left;
  }

  @media screen and (min-width: 768px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 768px) and (min-resolution: 192dpi) {
    text-align: left;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 19px;
  }

  @media screen and (min-width: 1440px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 1440px) and (min-resolution: 192dpi) {
    margin-bottom: 19px;
  }
`;

export const Percent = styled.div`
  color: var(--Primery-Color-Blue, #407bff);
`;

export const Percents = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const RangeAdd = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 16px;

  @media screen and (max-width: 767px) and (-webkit-min-device-pixel-ratio: 2),
    (max-width: 767px) and (min-resolution: 192dpi) {
    gap: 16px;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    flex-direction: row;
    gap: 12px;
  }

  @media screen and (min-width: 768px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 768px) and (min-resolution: 192dpi) {
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 23px;
  }

  @media screen and (min-width: 1440px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 1440px) and (min-resolution: 192dpi);
`;
