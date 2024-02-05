import styled from "styled-components";

export const StyledRegisterContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: end;
  height: 100%;
  align-items: center;
`;

export const StyledRegisterForm = styled.form`
  max-width: 384px;
  display: flex;
  flex-direction: column;
  padding: 5px;
  width: 100%;
  margin-right: 90px;

  //   position: relative;
  //   top: 50%;
  // left: 50%;

  .title {
    color: #2f2f2f;
    font-size: 26px;
    font-weight: 500;
    line-height: 1.3;
  }

  .label {
    margin-top: 16px;
  }
  .label-text {
    color: #2f2f2f;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.33;
  }
  .input {
    margin-top: 8px;
    border-radius: 6px;
    border: 1px solid #d7e3ff;
    background: #fff;
    padding: 12px 10px;

    &::placeholder {
      color: #9ebbff;
      font-size: 16px;
      font-weight: 400;
      line-height: 1.23;
    }
  }
  .button {
    border-radius: 10px;
    background: #407bff;
    box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
    padding: 10px 30px;
    border: none;
    margin-top: 16px;

    color: #fff;
    text-align: center;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.33;
    &:hover {
      box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
    }
    &:active {
      box-shadow: none;
    }
    &:disabled {
      background-color: #407bff;
      cursor: not-allowed;
    }
  }
  .link {
    margin-top: 16px;
    color: #407bff;

    font-size: 16px;
    font-weight: 400;
    line-height: 1.25;
  }
`;
