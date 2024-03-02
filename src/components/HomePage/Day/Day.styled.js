import styled from "styled-components";

export const StyledDayItemWrapper = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc((100% - 104px) / 5);

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    width: calc((100% - 306px) / 10);
  }

  @media screen and (min-width: 1440px) {
    width: calc((100% - 198px) / 10);
  }
`;

export const StyledDayBtn = styled.button`
  min-width: 32px;
  min-height: 32px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.29;
  color: var(--blackPrimari);
  background-color: #fff;
  border-radius: 50%;
  padding: 0px;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #fff;
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }
  &:active {
    box-shadow: none;
  }

  @media screen and (min-width: 768px) {
    min-width: 34px;
    min-height: 34px;
    font-size: 16px;
    line-height: 1.25;
  }
`;

export const Percent = styled.span`
  color: var(--blueSecondary);
  font-size: 10px;
  line-height: 1.6;

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    font-size: 13px;
    line-height: 1.54;
  }

  @media screen and (min-width: 1440px) {
    font-size: 12px;
    line-height: 1.5;
  }
`;

export const ButtonXmark = styled.button`
  display: flex;
  margin-left: auto;
  border: none;
  background: white;
`;
