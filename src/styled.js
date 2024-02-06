import styled from "styled-components";

export const StyledMainContainer = styled.div`
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;
  height: 100%;

  @media (min-width: 320px) and (max-width: 767px) {
    min-width: 280px;
    padding: 0 20px;
  }
  @media (min-width: 768px) and (max-width: 1439px) {
    max-width: 704px;
    /* padding: 0 32px; */
  }
  @media (min-width: 1440px) {
    max-width: 1216px;
    padding: 0 15px;
  }
`;
