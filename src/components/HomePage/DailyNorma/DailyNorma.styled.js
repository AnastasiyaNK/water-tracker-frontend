import styled from 'styled-components';

export const DailyNormaBox = styled.div`
  width: 164px;
  height: 76px;
  position: relative;
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
  width: 54px;
  height: 24px;
  gap: 12px;
`;

export const Water = styled.div`
  color: var(--Primery-Color-Blue, #407bff);
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 100% */
`;

export const Edit = styled.div`
  color: #8baeff;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 125% */
`;
