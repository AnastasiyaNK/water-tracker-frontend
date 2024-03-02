import styled from "styled-components";

export const StyledMainContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 20px;
  margin: 0 auto;

  @media (min-width: 320px) and (max-width: 767px) {
    min-width: 280px;
    max-width: 320px;
    padding: 0 20px;
  }
  @media (min-width: 768px) and (max-width: 1439px) {
    width: 744px;
  }
  @media (min-width: 1440px) {
    width: 1246px;
    padding: 0 15px;
  }

  &.home-container {
    padding-top: 24px;
    padding-bottom: 40px;

    @media (min-width: 768px) and (max-width: 1439px) {
      padding-top: 40px;
    }

    @media (min-width: 1440px) {
      padding-top: 20px;
    }
  }
`;
