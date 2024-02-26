import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  padding-top: 8px;

  nav {
    display: flex;
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
    line-height: 1.25;
  }

  .user-name:hover,
  .user-name:focus {
    color: #ff9d43;
  }

  /* @media (min-width: 320px) and (max-width: 767px) {
    min-width: 280px;
  }

  @media (min-width: 768px) and (max-width: 1439px) {
    padding-top: 16px;
  }

  @media (min-width: 1216px) and (min-width: 1440px) {
    padding: 12px 0;
    min-width: 1216px;
  } */
`;
