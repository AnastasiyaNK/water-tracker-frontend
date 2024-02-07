import styled from "styled-components";

export const DailyNormaBox = styled.div`
  width: 164px;
  height: 74px;
  left: 74px;
  top: 100px;
  display: inline-flex;
  padding: 8px 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  border-radius: 10px;
  border: 1px solid var(--Secondary-color-2, #ecf2ff);
  background: var(--Primery-Color-White, #fff);
  box-shadow: 0px 4px 8px 0px rgba(158, 187, 255, 0.12);
`;

export const EditWater = styled.div`
  display: flex;
  gap: 12px;
`;

export const Water = styled.div`
  width: 50px;
  height: 22px;
  color: var(--Primery-Color-Blue, #407bff);
  font-family: Roboto;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;

  @media screen and (max-width: 767px) and (-webkit-min-device-pixel-ratio: 2),
    (max-width: 767px) and (min-resolution: 192dpi) {
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    width: 54px;
    height: 24px;
    font-size: 24px;
    line-height: 24px;
  }

  @media screen and (min-width: 768px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 768px) and (min-resolution: 192dpi) {
  }

  @media screen and (min-width: 1440px) {
    width: 54px;
    height: 24px;
    font-size: 24px;
    line-height: 24px;
  }

  @media screen and (min-width: 1440px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 1440px) and (min-resolution: 192dpi) {
  }
`;

export const Edit = styled.div`
  color: #8baeff;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;

  line-height: 20px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover,
  &:focus {
    color: #ff9d43;
  }
`;
