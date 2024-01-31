import styled from "styled-components";

export const StyledUserAuth = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 8px;
  display: flex;
  align-items: center;
  border: none;
  background-color: inherit;
  cursor: pointer;

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
