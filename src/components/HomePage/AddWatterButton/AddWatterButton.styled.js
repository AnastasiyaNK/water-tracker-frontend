import styled from "styled-components";

export const StyledAddWatterBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  /* width: 114px;
  height: 24px; */
  padding: 0;

  color: var(--accentPrimari);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  border: none;
  background-color: transparent;

  & svg {
    width: 16px;
    height: 16px;
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;

    & svg {
      width: 24px;
      height: 24px;
    }
  }
`;

// export const Button = styled.div`
//   top: 825px;
//   width: 280px;
//   height: 44px;
//   left: 526px;
//   display: inline-flex;
//   padding: 10px 30px;
//   justify-content: center;
//   align-items: center;
//   gap: 10px;
//   border-radius: 10px;
//   background: var(--Primery-Color-Blue, #407bff);
//   box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
//   color: white;

//   @media screen and (max-width: 767px) and (-webkit-min-device-pixel-ratio: 2),
//     (max-width: 767px) and (min-resolution: 192dpi) {
//   }

//   @media screen and (min-width: 768px) and (max-width: 1439px) {
//     width: 34px;
//     height: 20px;
//     font-size: 13px;
//     line-height: 20px;
//   }

//   @media screen and (min-width: 768px) and (-webkit-min-device-pixel-ratio: 2),
//     (min-width: 768px) and (min-resolution: 192dpi) {
//     width: 34px;
//     height: 20px;
//     font-size: 13px;
//     line-height: 20px;
//   }

//   @media screen and (min-width: 1440px) {
//     width: 32px;
//     height: 18px;
//     font-size: 12px;
//     line-height: 18px;
//   }

//   @media screen and (min-width: 1440px) and (-webkit-min-device-pixel-ratio: 2),
//     (min-width: 1440px) and (min-resolution: 192dpi) {
//     width: 32px;
//     height: 18px;
//     font-size: 12px;
//     line-height: 18px;
//   }
// `;

// export const ButtonStyle = styled.div`
//   width: 280px;
//   height: 36p;
//   left: 526px;
//   top: 825px;
//   display: inline-flex;
//   padding: 10px 30px;
//   justify-content: center;
//   align-items: center;
//   gap: 10px;
//   border-radius: 10px;
//   border: none;
//   background: #407bff;
//   box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
//   color: white;
// `;
