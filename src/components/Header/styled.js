import styled from "styled-components";

export const StyledHeader = styled.header`
  border: 1px solid red;
  .logo {
    border: 1px solid blue;
  }
  .sign-in-wrapper {
  }
  .sign-in-link {
  }

  @media (max-width: 1600px) {
  }
  @media (max-width: 1200px) {
    .logo {
      border: 1px solid grey;
    }
  }
  @media (max-width: 992px) {
    .logo {
      border: 1px solid violet;
    }
  }
  @media (max-width: 768px) {
    .logo {
      border: 1px solid orange;
    }
  }
  @media (max-width: 576px) {
    .logo {
      border: 1px solid lime;
    }
  }
  @media (max-width: 376px) {
    .logo {
      border: 1px solid yellow;
    }
  }
`;
