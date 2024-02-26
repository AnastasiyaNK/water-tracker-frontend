import styled from "styled-components";

export const RangeAdd = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 320px) and (max-width: 1439px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    align-items: center;
    flex-direction: row;
    gap: 12px;
  }

  @media screen and (min-width: 1440px) {
    gap: 23px;
  }
  /* justify-content: space-between; */
  /* align-items: center; */
  /* gap: 16px; */

  /* @media screen and (max-width: 767px) and (-webkit-min-device-pixel-ratio: 2),
    (max-width: 767px) and (min-resolution: 192dpi) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
  } */
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    justify-content: center;
    /* flex-direction: row; */
    /* display: flex; */
    /* gap: 12px; */
  }

  /* @media screen and (min-width: 768px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 768px) and (min-resolution: 192dpi) {
    justify-content: center;
    flex-direction: row;
    display: flex;
    gap: 12px;
  } */

  @media screen and (min-width: 1440px) {
    width: 592px;
    flex-direction: row;
    display: flex;
    gap: 23px;
  }

  /* @media screen and (min-width: 1440px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 1440px) and (min-resolution: 192dpi) {
    width: 592px;
    flex-direction: row;
    display: flex;
    gap: 23px;
  } */
`;

export const RangBar = styled.div`
  /* height: 90px;
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
  } */
`;

export const Title = styled.p`
  margin-bottom: 8px;
  font-size: 18px;
  line-height: 1.33;
  color: var(--accentPrimari);

  /* @media screen and (max-width: 767px) and (-webkit-min-device-pixel-ratio: 2),
    (max-width: 767px) and (min-resolution: 192dpi) {
    margin-bottom: 19px;
    margin-left: 0;
  } */

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    margin-bottom: 16px;
  }

  /* @media screen and (min-width: 768px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 768px) and (min-resolution: 192dpi) {
    text-align: left;
  } */

  /* @media screen and (min-width: 1440px) {
    margin-bottom: 19px;
  } */

  /* @media screen and (min-width: 1440px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 1440px) and (min-resolution: 192dpi) {
    margin-bottom: 19px;
  } */
`;

export const Percents = styled.div`
  display: flex;
  justify-content: space-between;

  width: 280px;

  @media screen and (min-width: 768px) {
    width: 356px;
  }

  @media screen and (min-width: 1440px) {
    width: 390px;
  }
`;

export const Percent = styled.span`
  position: relative;
  color: var(--accentPrimari);
  width: 30px;

  font-size: 12px;
  line-height: 1.33;
  text-align: center;

  &.percent-bold {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.25;
  }

  &::after {
    content: "";
    position: absolute;
    top: -50%;
    left: 50%;
    width: 0.5px;
    height: 8px;
    background-color: #d7e3ff;
  }
`;

export const RangeBarLine = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 16px;
  width: 256px;
  height: 8px;
  border-radius: 10px;
  background-color: #d7e3ff;

  @media screen and (min-width: 768px) {
    width: 325px;
  }

  @media screen and (min-width: 1440px) {
    width: 360px;
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: ${({ $percentage }) => `calc(${$percentage}%)`};
    transform: translate(-50%, -50%);
    width: 14px;
    height: 14px;
    background-color: #ffffff;
    border: 1px solid #407bff;
    border-radius: 100%;
  }

  &::before {
    content: "";
    position: absolute;
    width: ${({ $percentage }) => `${$percentage}%`};
    height: 100%;
    background: #9ebbff;
    border-radius: 10px;
    z-index: 0;
  }
`;
