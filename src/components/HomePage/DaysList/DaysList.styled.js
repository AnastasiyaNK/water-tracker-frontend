import styled from 'styled-components';

export const TableDays = styled.div`
  margin-top: 14px;
  display: flex;
  flex-wrap: wrap;
  row-gap: 26px;
  column-gap: 16px;

  @media screen and (max-width: 767px) and (-webkit-min-device-pixel-ratio: 2),
    (max-width: 767px) and (min-resolution: 192dpi) {
    display: flex;
    flex-wrap: wrap;
    margin-top: 14px;
    row-gap: 26px;
    column-gap: 16px;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    display: flex;
    flex-wrap: wrap;
    margin-top: 16px;
    row-gap: 34px;
    column-gap: 20px;
  }

  @media screen and (min-width: 768px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 768px) and (min-resolution: 192dpi) {
    display: flex;
    flex-wrap: wrap;
    margin-top: 16px;
    row-gap: 34px;
    column-gap: 20px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    flex-wrap: wrap;
    margin-top: 16px;
    row-gap: 22px;
    column-gap: 20px;
  }

  @media screen and (min-width: 1440px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 1440px) and (min-resolution: 192dpi) {
    display: flex;
    flex-wrap: wrap;
    margin-top: 16px;
    row-gap: 22px;
    column-gap: 20px;
  }
`;

export const CalendarStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  ul {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 16px 26px;
  }
  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
  }
  button {
    line-height: 1;
  }
  button[data-active='true'] {
    font-weight: bold;
  }
  li > p {
    color: #9ebbff;
    text-align: center;
    font-size: 10px;
    line-height: 1.6;
  }

  @media only screen and (min-width: 768px) {
    width: 646px;
    ul {
      grid-template-columns: repeat(10, 1fr);
      gap: 20px 34px;
    }
    li > p {
      font-size: 13px;
      line-height: 1.5385;
    }
  }

  @media only screen and (min-width: 1440px) {
    width: 538px;
    ul {
      gap: 20px 22px;
    }
    li > p {
      font-size: 12px;
      line-height: 1.5;
    }
  }
`;

export const CalendarHeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    font-size: 24px;
    font-weight: 500;
    line-height: 1.25;
  }
  > div {
    display: flex;
    gap: 12px;
    color: #407bff;
    text-align: center;
    font-size: 16px;
    line-height: 1.25;
    > p {
      width: 125px;
    }
  }
  @media only screen and (min-width: 768px) {
    h3 {
      font-size: 26px;
      line-height: 1.23;
    }
  }
`;

export const ButtonArrow = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};

  svg {
    fill: #407bff;
  }
  svg[data-arrow='left'] {
    transform: rotate(180deg);
  }
  background: transparent;
  border: none;
  line-height: 1;
  button[data-active='true'] {
    font-weight: bold;
  }
`;

export const Title = styled.p`
  color: var(--Primery-Color-Black, #2f2f2f);
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;

  @media screen and (max-width: 767px) and (-webkit-min-device-pixel-ratio: 2),
    (max-width: 767px) and (min-resolution: 192dpi) {
  }
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    font-size: 26px;
    font-style: normal;
    font-weight: 500;
    line-height: 32px;
  }
  @media screen and (min-width: 768px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 768px) and (min-resolution: 192dpi) {
    font-size: 26px;
    line-height: 32px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 26px;
    font-weight: 500;
    line-height: 32px;
  }

  @media screen and (min-width: 1440px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 1440px) and (min-resolution: 192dpi) {
    font-size: 26px;
    font-weight: 500;
    line-height: 32px;
  }
`;

export const DaysListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    font-size: 24px;
    font-weight: 500;
    line-height: 1.25;
  }
  > div {
    display: flex;
    gap: 12px;
    color: #407bff;
    text-align: center;
    font-size: 16px;
    line-height: 1.25;
    > p {
      width: 125px;
    }
  }
  @media only screen and (min-width: 768px) {
    h3 {
      font-size: 26px;
      line-height: 1.23;
    }
  }
`;
