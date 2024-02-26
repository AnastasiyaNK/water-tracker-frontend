import styled from "styled-components";

export const DailyNormaBox = styled.div`
  width: 165px;
  height: 74px;
  padding: 8px 20px;
  border-radius: 10px;
  border: 1px solid var(--lightGreySecondary);
  background: var(--whitePrimari);
  box-shadow: 0px 4px 8px 0px rgba(158, 187, 255, 0.12);
  margin-bottom: 232px;

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    margin-bottom: 326px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 466px;
  }

  p {
    margin-bottom: 12px;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.3;
    color: #2f2f2f;
  }
`;

export const EditWater = styled.div`
  display: flex;
  gap: 12px;
`;

export const Water = styled.div`
  width: 50px;
  height: 22px;
  color: var(--accentPrimari);
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
