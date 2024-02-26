import styled from "styled-components";

export const WaterStatistic = styled.div`
  width: 280px;
  /* height: 836px; */
  padding: 24px 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 24px;
  border-radius: 10px;
  background: var(--Secondary-color-2, #ecf2ff);
  box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);

  @media screen and (max-width: 767px) and (-webkit-min-device-pixel-ratio: 2),
    (max-width: 767px) and (min-resolution: 192dpi) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 280px;
    padding: 24px 8px;
    height: 836px;
    gap: 24px;
    border-radius: 10px;
    background: var(--Secondary-color-2, #ecf2ff);
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);
  }
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 704px;
    padding: 32px 24px;
    /* height: 688px; */
    gap: 24px;
    border-radius: 10px;
    background: var(--Secondary-color-2, #ecf2ff);
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);
  }
  @media screen and (min-width: 768px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 768px) and (min-resolution: 192dpi) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 704px;
    padding: 32px 24px;
    gap: 24px;
    border-radius: 10px;
    background: var(--Secondary-color-2, #ecf2ff);
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);
  }
  @media screen and (min-width: 1440px) {
    display: flex;
    width: 592px;
    padding: 32px 24px;
    /* height: 680px; */
    gap: 24px;
    border-radius: 10px;
    background: var(--Secondary-color-2, #ecf2ff);
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);
  }

  @media screen and (min-width: 1440px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 1440px) and (min-resolution: 192dpi) {
    display: flex;
    flex-direction: column;
    width: 592px;
    padding: 32px 24px;
    gap: 24px;
    border-radius: 10px;
    background: var(--Secondary-color-2, #ecf2ff);
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);
  }
`;
