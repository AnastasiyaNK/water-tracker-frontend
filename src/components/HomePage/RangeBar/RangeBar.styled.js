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

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    justify-content: center;
  }

  @media screen and (min-width: 1440px) {
    width: 592px;
    flex-direction: row;
    display: flex;
    gap: 23px;
  }
`;

export const RangBar = styled.div``;

export const Title = styled.p`
  margin-bottom: 8px;
  font-size: 18px;
  line-height: 1.33;
  color: var(--accentPrimari);

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    margin-bottom: 16px;
  }
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
