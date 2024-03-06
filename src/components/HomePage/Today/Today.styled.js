import styled from "styled-components";

export const TodayBox = styled.div`
  margin-bottom: 24px;
`;

export const TodayStile = styled.h2`
  margin-bottom: 16px;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
  color: var(--blackPrimari, #2f2f2f);

  @media screen and (min-width: 768px) {
    font-size: 26px;
    line-height: 1.23;
  }
`;
