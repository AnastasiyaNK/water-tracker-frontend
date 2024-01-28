import styled from 'styled-components';

export const Day = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 20px;
  border: 1px solid var(--Secondary-color-5, #ff9d43);
  background: var(--Primery-Color-White, #fff);
  color: var(--Primery-Color-Black, #2f2f2f);
  text-align: center;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

export const Percent = styled.div`
  color: var(--Secondary-color-4, #9ebbff);
  text-align: center;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`;
export const TableDays = styled.div`
  margin-top: 16px;
  display: flex;
  flex-wrap: wrap;
  row-gap: 24px;
  column-gap: 20px;
`;
