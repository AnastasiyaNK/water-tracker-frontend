import styled from "styled-components";

export const DaysListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const StyledBtnGroupWrapper = styled.div`
  display: flex;
  gap: 12px;

  span {
    color: var(--accentPrimari);
    font-size: 16px;
    line-height: 1.25;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
  color: var(--blackPrimari, #2f2f2f);

  @media screen and (min-width: 768px) {
    font-size: 26px;
    line-height: 1.23;
  }
`;

export const ButtonArrow = styled.button`
  padding: 0;
  background-color: transparent;
  border: none;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};

  svg {
    width: 5px;
    height: 10px;
  }
`;

export const TableDays = styled.ul`
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  row-gap: 16px;
  column-gap: 26px;

  width: 264px;
  height: 460px;

  /* @media screen and (max-width: 767px) and (-webkit-min-device-pixel-ratio: 2),
    (max-width: 767px) and (min-resolution: 192dpi) {
    display: flex;
    flex-wrap: wrap;
    margin-top: 14px;
    row-gap: 26px;
    column-gap: 16px;
  } */

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    row-gap: 20px;
    column-gap: 34px;

    width: 656px;
    height: 292px;
  }

  @media screen and (min-width: 1440px) {
    row-gap: 20px;
    column-gap: 22px;
    width: 544px;
    height: 284px;
  }

  /* @media screen and (min-width: 768px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 768px) and (min-resolution: 192dpi) {
    display: flex;
    flex-wrap: wrap;
    margin-top: 16px;
    row-gap: 34px;
    column-gap: 20px;
  } */

  /* @media screen and (min-width: 1440px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 1440px) and (min-resolution: 192dpi) {
    display: flex;
    flex-wrap: wrap;
    margin-top: 16px;
    row-gap: 22px;
    column-gap: 20px;
  } */
`;

// export const CalendarStyled = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 16px;

//   ul {
//     display: grid;
//     grid-template-columns: repeat(5, 1fr);
//     gap: 16px 26px;
//   }
//   li {
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     gap: 4px;
//   }
//   button {
//     line-height: 1;
//   }
//   button[data-active="true"] {
//     font-weight: bold;
//   }
//   li > p {
//     color: #9ebbff;
//     text-align: center;
//     font-size: 10px;
//     line-height: 1.6;
//   }

//   @media only screen and (min-width: 768px) {
//     width: 646px;
//     ul {
//       grid-template-columns: repeat(10, 1fr);
//       gap: 20px 34px;
//     }
//     li > p {
//       font-size: 13px;
//       line-height: 1.5385;
//     }
//   }

//   @media only screen and (min-width: 1440px) {
//     width: 538px;
//     ul {
//       gap: 20px 22px;
//     }
//     li > p {
//       font-size: 12px;
//       line-height: 1.5;
//     }
//   }
// `;

// export const CalendarHeaderStyled = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;

//   h3 {
//     font-size: 24px;
//     font-weight: 500;
//     line-height: 1.25;
//   }
//   > div {
//     display: flex;
//     gap: 12px;
//     color: #407bff;
//     text-align: center;
//     font-size: 16px;
//     line-height: 1.25;
//     > p {
//       width: 125px;
//     }
//   }
//   @media only screen and (min-width: 768px) {
//     h3 {
//       font-size: 26px;
//       line-height: 1.23;
//     }
//   }
// `;

// export const Title = styled.p`
//   color: var(--Primery-Color-Black, #2f2f2f);
//   font-family: Roboto;
//   font-size: 24px;
//   font-style: normal;
//   font-weight: 500;
//   line-height: 30px;

//   @media screen and (max-width: 767px) and (-webkit-min-device-pixel-ratio: 2),
//     (max-width: 767px) and (min-resolution: 192dpi) {
//   }
//   @media screen and (min-width: 768px) and (max-width: 1439px) {
//     font-size: 26px;
//     font-style: normal;
//     font-weight: 500;
//     line-height: 32px;
//   }
//   @media screen and (min-width: 768px) and (-webkit-min-device-pixel-ratio: 2),
//     (min-width: 768px) and (min-resolution: 192dpi) {
//     font-size: 26px;
//     line-height: 32px;
//   }
//   @media screen and (min-width: 1440px) {
//     font-size: 26px;
//     font-weight: 500;
//     line-height: 32px;
//   }

//   @media screen and (min-width: 1440px) and (-webkit-min-device-pixel-ratio: 2),
//     (min-width: 1440px) and (min-resolution: 192dpi) {
//     font-size: 26px;
//     font-weight: 500;
//     line-height: 32px;
//   }
// `;
