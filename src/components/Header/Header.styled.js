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
`;
