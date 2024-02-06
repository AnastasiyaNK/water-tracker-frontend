import styled from "styled-components";

export const StyledLoginContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 100%;
  padding-top: 40px;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }

  @media screen and (min-width: 1440px) {
    justify-content: end;
    align-items: center;
  }
`;

export const StyledLoginForm = styled.form`
  max-width: 280px;
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 768px) {
    max-width: 336px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 384px;
    margin-right: 90px;
  }

  .title {
    color: #2f2f2f;
    font-size: 26px;
    font-weight: 500;
    line-height: 1.23;
  }

  .label-text {
    margin-top: 16px;
    color: #2f2f2f;
    position: relative;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.33;
  }

  .label {
    margin-top: 16px;
  }
  .icon-wrapper {
    position: relative;
    max-width: 392px;
  }
  .eye-icon {
    position: absolute;
    top: 20px;
    right: 10px;

    width: 16px;
    height: 16px;
    cursor: pointer;

    path {
      transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
      stroke: #407bff;
    }
  }
  .input {
    margin-top: 8px;
    border-radius: 6px;
    border: 1px solid #d7e3ff;
    background: #fff;
    padding: 12px 10px;
    display: flex;
    padding: 12px 10px;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    outline: none;

    &::placeholder {
      color: #9ebbff;
      font-size: 16px;
      font-weight: 400;
      line-height: 1.23;
    }
    &:active,
    &:focus,
    &:hover {
      color: #407bff;
    }

    @media screen and (min-width: 768px) {
      width: 336px;
      height: 44px;
    }
    @media screen and (min-width: 1440px) {
      width: 384px;
      height: 44px;
    }
  }
  .button {
    font-family: "Roboto", sans-serif;
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
    height: 36px;
    transition: box-shadow 0.3s ease;
    background-color: #407bff;

    &:hover {
      box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
    }
    &:active {
      cursor: pointer;
      box-shadow: none;
    }
    &:disabled {
      background-color: #407bff;
      cursor: not-allowed;
    }

    @media screen and (min-width: 768px) {
      width: 336px;
      height: 44px;
    }

    @media screen and (min-width: 1440px) {
      width: 384px;
      height: 44px;
    }
  }

  .link {
    margin-top: 16px;
    color: #407bff;

    font-size: 16px;
    font-weight: 400;
    line-height: 1.25;
  }
  .google-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  .text-google {
  }
`;
