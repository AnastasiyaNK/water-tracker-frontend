import styled from "styled-components";

export const StyledUserAuth = styled.div`
  position: relative;
  display: flex;
  margin-left: auto;

  .dropdown-open-btn {
    display: flex;
    align-items: center;
    gap: 8px;
    border: none;
    background-color: inherit;
    cursor: pointer;
  }
  .auth-wrapper {
  }
  .name-user {
    color: #2f2f2f;
    text-align: right;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.33;

    @media screen and (min-width: 768px) {
      font-size: 18px;
    }
  }
  .avatar-user {
    width: 28px;
    height: 28px;
    object-fit: cover;
    border-radius: 50%;
  }
  .auth-btn {
    display: flex;
    justify-content: center;
    align-items: center;

    & svg {
      path {
        transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
        stroke: #407bff;
      }
      width: 16px;
      height: 16px;
    }

    &:hover,
    &:focus {
      & svg {
        path {
          stroke: #ff9d43;
        }
      }
    }
  }
`;
