import styled from 'styled-components';

export const Portion = styled.div`
  /* width: 254px; */
  display: flex;
  padding: 6px 0;
  align-items: baseline;
  border-bottom: 1px solid #d7e3ff;

  @media screen and (max-width: 767px) and (-webkit-min-device-pixel-ratio: 2),
    (max-width: 767px) and (min-resolution: 192dpi) {
    align-items: baseline;
    /* width: 254px; */
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    width: 690px;
    align-items: center;
    padding: 12px 0;
  }

  @media screen and (min-width: 768px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 768px) and (min-resolution: 192dpi) {
    width: 690px;
    align-items: center;
    padding: 12px 0;
  }

  @media screen and (min-width: 1440px) {
    align-items: center;
    padding: 12px 0;
  }

  @media screen and (min-width: 1440px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 1440px) and (min-resolution: 192dpi) {
    align-items: center;
    padding: 12px 0;
  }
`;

export const Ml = styled.div`
  margin-left: 10px;
  color: var(--Primery-Color-Blue, #407bff);
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

export const Time = styled.div`
  width: 24px;
  margin-left: 12px;
  color: var(--Primery-Color-Black, #2f2f2f);
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;

  @media screen and (max-width: 767px) and (-webkit-min-device-pixel-ratio: 2),
    (max-width: 767px) and (min-resolution: 192dpi) {
    margin-left: 12px;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    margin-left: 16px;
  }

  @media screen and (min-width: 768px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 768px) and (min-resolution: 192dpi) {
    margin-left: 16px;
  }

  @media screen and (min-width: 1440px) {
    margin-left: 16px;
  }

  @media screen and (min-width: 1440px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 1440px) and (min-resolution: 192dpi) {
    margin-left: 16px;
  }
`;

export const Edit = styled.div`
  display: flex;
  gap: 16px;
  margin-left: 60px;

  @media screen and (max-width: 767px) and (-webkit-min-device-pixel-ratio: 2),
    (max-width: 767px) and (min-resolution: 192dpi) {
    margin-left: 60px;
    display: flex;
    gap: 16px;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    display: flex;
    gap: 18px;
    margin-left: 455px;
  }

  @media screen and (min-width: 768px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 768px) and (min-resolution: 192dpi) {
    display: flex;
    gap: 18px;
    margin-left: 455px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    display: flex;
    gap: 18px;
    margin-left: 340px;
  }

  @media screen and (min-width: 1440px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 1440px) and (min-resolution: 192dpi) {
    display: flex;
    gap: 18px;
    margin-left: 340px;
  }
`;

export const PortionsList = styled.div`
  width: 254px;
  display: flex;
  padding: 0;
  flex-direction: column;

  //---Стилізація скроллбара--/////
  * {
    scrollbar-width: thin;
    scrollbar-color: #9ebbff #d7e3ff;
  }
  *::-webkit-scrollbar {
    width: 1px;
  }
  *::-webkit-scrollbar-track {
    background-color: #f5f5f5;
  }
  *::-webkit-scrollbar-thumb {
    width: 10px;
    background-color: red;
  }

  @media screen and (max-width: 767px) and (-webkit-min-device-pixel-ratio: 2),
    (max-width: 767px) and (min-resolution: 192dpi) {
    width: 254px;
  }
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    width: 690px;
    height: 276px;
    padding: 0 32px 0 0;
  }
  @media screen and (min-width: 768px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 768px) and (min-resolution: 192dpi) {
    padding: 0 32px 0 0;
    width: 690px;
    height: 276px;
    padding: 0 32px 0 0;
  }
  @media screen and (min-width: 1440px) {
    width: 544px;
    height: 260px;
    padding: 0 32px 0 0;
    padding: 0;
  }

  @media screen and (min-width: 1440px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 1440px) and (min-resolution: 192dpi) {
    padding: 0;
  }
`;

export const Portions = styled.div`
  height: 136px;
  margin-bottom: 12px;

  @media screen and (max-width: 767px) and (-webkit-min-device-pixel-ratio: 2),
    (max-width: 767px) and (min-resolution: 192dpi) {
    height: 136px;
  }
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    height: 156px;
    width: 690px;
  }
  @media screen and (min-width: 768px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 768px) and (min-resolution: 192dpi) {
    height: 156px;
    width: 690px;
  }
  @media screen and (min-width: 1440px) {
    height: 156px;
  }

  @media screen and (min-width: 1440px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 1440px) and (min-resolution: 192dpi) {
    height: 156px;
  }
`;

export const ScrollableDiv = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
`;

export const Button = styled.button`
  width: 16px;
  height: 16px;
  border: none;
  background: none;
`;
