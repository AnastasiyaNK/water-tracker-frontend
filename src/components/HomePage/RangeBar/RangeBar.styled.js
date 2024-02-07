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
  margin-left: 0;
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    justify-content: center;
    flex-direction: row;
    display: flex;
    gap: 12px;
  }

  @media screen and (min-width: 768px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 768px) and (min-resolution: 192dpi) {
    justify-content: center;
    flex-direction: row;
    display: flex;
    gap: 12px;
  }

  @media screen and (min-width: 1440px) {
    width: 592px;
    flex-direction: row;
    display: flex;
    gap: 23px;
  }

  @media screen and (min-width: 1440px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 1440px) and (min-resolution: 192dpi) {
    width: 592px;
    flex-direction: row;
    display: flex;
    gap: 23px;
  }
`;

export const RangeBarLine = styled.div`
  position: relative;
  height: 8px;
  background-color: #d7e3ff;
  width: calc(100% - 24px);
  border-radius: 10px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: calc(100% - 31px);
  }

  @media screen and (min-width: 1440px) {
    width: calc(100% - 31px);
  }

  &::after {
    content: '';
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
    content: '';
    position: absolute;
    width: ${({ $percentage }) => `${$percentage}%`};
    height: 100%;
    background: #9ebbff;
    border-radius: 10px;
    z-index: 0;
  }
`;
