import styled from "styled-components";

export const WaterStatistic = styled.div`
  width: 280px;
  padding: 24px 8px;
  border-radius: 10px;
  background: var(--lightGreySecondary, #ecf2ff);
  box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);

  @media screen and (min-width: 768px) {
    width: 704px;
    padding: 32px 24px;
  }

  @media screen and (min-width: 1440px) {
    width: 592px;
  }
`;
