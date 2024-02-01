import styled from 'styled-components';

export const TableDays = styled.div`
  margin-top: 14px;
  display: flex;
  flex-wrap: wrap;
  row-gap: 26px;
  column-gap: 16px;

  @media screen and (max-width: 767px) and (-webkit-min-device-pixel-ratio: 2),
    (max-width: 767px) and (min-resolution: 192dpi) {
    display: flex;
    flex-wrap: wrap;
    margin-top: 14px;
    row-gap: 26px;
    column-gap: 16px;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    display: flex;
    flex-wrap: wrap;
    margin-top: 16px;
    row-gap: 34px;
    column-gap: 20px;
  }

  @media screen and (min-width: 768px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 768px) and (min-resolution: 192dpi) {
    display: flex;
    flex-wrap: wrap;
    margin-top: 16px;
    row-gap: 34px;
    column-gap: 20px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    flex-wrap: wrap;
    margin-top: 16px;
    row-gap: 22px;
    column-gap: 20px;
  }

  @media screen and (min-width: 1440px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 1440px) and (min-resolution: 192dpi) {
    display: flex;
    flex-wrap: wrap;
    margin-top: 16px;
    row-gap: 22px;
    column-gap: 20px;
  }
`;
