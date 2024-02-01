import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  padding: 8px 0;
  align-items: center;

  .link-logo {
  }
  .main-logo {
  }
  .user-wrapper {
    display: flex;
    align-items: center;
    margin-left: auto;
    gap: 8px;
    text-decoration: none;
  }
  .user-name {
    color: #407bff;

    font-size: 16px;
    font-weight: 400;
    line-height: 1/25;
  }
  .user-logo {
  }

  @media (min-width: 320px) and (max-width: 767px) {
    min-width: 280px;
  }

  @media (min-width: 768px) and (max-width: 1439px) {
    padding: 16px 32px 0px 32px;
  }

  @media (min-width: 1440px) {
    padding: 12px 0;
  }
`;
