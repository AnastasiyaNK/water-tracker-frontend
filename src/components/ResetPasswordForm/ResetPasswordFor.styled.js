import styled from "styled-components";

export const StyledResetPassForm = styled.form`
  max-width: 280px;
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (max-width: 767px) {
    margin-top: 24px;
  }

  @media screen and (min-width: 768px) {
    max-width: 336px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 384px;
    margin-right: 90px;
  }

  .password-subtitle {
    margin-bottom: 8px;
    font-size: 18px;
    line-height: 1.33;
    color: var(--blackPrimari);
  }

  .password-wrapper {
    position: relative;
  }

  .main-input {
    padding: 12px 10px;

    font-size: 16px;
    line-height: 1.25;
    border: 1px solid #d7e3ff;
    border-radius: 6px;
    color: #407bff;
    background: #fff;
    display: flex;
    padding: 12px 10px;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    outline: none;

    &::placeholder {
      color: #9ebbff;
    }
    &:active,
    &:focus {
      outline: 1px solid #9ebbff;
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

  .first-pass-wrapper {
    margin-bottom: 16px;
  }

  .eye-icon {
    position: absolute;
    top: 15px;
    right: 10px;

    width: 16px;
    height: 16px;
    cursor: pointer;

    path {
      transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
      stroke: #407bff;
    }
  }

  .error-input {
    border: 1px solid #ef5050;
    color: #ef5050;
    outline: 0;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: #ef5050;
    }
  }

  .error {
    margin-top: 4px;
    font-size: 14px;
    color: #ef5050;
  }

  .button {
    border-radius: 10px;
    background: #407bff;
    box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
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
      height: 44px;
    }

    @media screen and (min-width: 1440px) {
      height: 44px;
    }
  }
`;
