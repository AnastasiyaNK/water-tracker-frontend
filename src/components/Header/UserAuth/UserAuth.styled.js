import styled from "styled-components";

export const StyledUserAuth = styled.div`
  position: relative;
  display: flex;
  margin-left: auto;

  .dropdown-open-btn {
    border: none;
    background-color: inherit;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .auth-wrapper {
  }
  .name-user {
    color: #2f2f2f;
    text-align: right;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.33;
    margin-right: 8px;
  }
  .avatar-user {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    margin-right: 4px;
  }
  .auth-btn {
    border: none;
    background-color: inherit;
    cursor: pointer;
  }
`;
