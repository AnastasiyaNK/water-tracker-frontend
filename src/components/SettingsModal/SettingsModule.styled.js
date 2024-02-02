import styled from "styled-components";

export const StyledSettingsModalForm = styled.form`
  .secondary-title {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.1;
    margin-bottom: 8px;
    color: #2f2f2f;
  }

  .upload-wrapper {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 24px;
  }

  .img-box {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 1px solid #ecf2ff;
    overflow: hidden;
  }

  .upload-input {
    display: none;
  }

  .upload-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    font-size: 14px;
    font-weight: 500;
    line-height: 1.28;
    color: #407bff;
    background-color: transparent;
    cursor: pointer;

    @media (min-width: 768px) {
      right: 24px;
    }

    & svg {
      path {
        transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
        stroke: #407bff;
      }
      width: 16px;
      height: 16px;
    }

    & p {
      transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    &:hover,
    &:focus {
      & svg {
        path {
          stroke: #ff9d43;
        }
      }

      & p {
        color: #ff9d43;
      }
    }
  }

  .global-wrapper {
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-bottom: 24px;

    @media (min-width: 1440px) {
      flex-direction: row;
    }
  }

  .gender-title {
    margin-bottom: 12px;
  }

  .gender-wrapper {
    display: flex;
    gap: 24px;

    margin-bottom: 24px;

    @media (min-width: 1440px) {
      margin-bottom: 52px;
    }
  }

  .radio-btn-wrapper {
    input {
      display: none;
      & + span {
        display: inline-block;
        position: relative;
        padding-left: 22px;
        font-size: 16px;
        cursor: pointer;

        &:before {
          content: "";
          display: block;
          position: absolute;
          top: 1px;
          left: 0px;
          width: 14px;
          height: 14px;

          border-radius: 50%;
          border: 1px solid #407bff;
          background: #fff;
        }

        &:after {
          content: "";
          display: block;
          position: absolute;
          top: 5px;
          left: 4px;
          width: 6px;
          height: 6px;

          background: #407bff;
          border-radius: 50%;
          opacity: 0;
          transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
        }
      }

      &:checked + span:after {
        opacity: 1;
      }
    }
  }

  .email-title {
    margin-top: 24px;
  }

  .main-input {
    font-size: 16px;
    line-height: 1.25;
    width: 256px;
    height: 44px;
    padding: 12px 10px;
    border-radius: 6px;
    border: 1px solid #d7e3ff;
    color: #407bff;

    &:focus {
      outline: 1px solid #9ebbff;
    }

    &::placeholder {
      color: #9ebbff;
    }

    @media screen and (min-width: 768px) {
      width: 392px;
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

  .password-subtitle {
    margin: 12px 0 8px 0;
    color: #2f2f2f;
    font-family: Roboto;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.25;
  }

  .password-wrapper {
    position: relative;
    max-width: 392px;
  }

  .eye-icon {
    position: absolute;
    top: 12px;
    right: 10px;

    width: 16px;
    height: 16px;
    cursor: pointer;

    path {
      transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
      stroke: #407bff;
    }
  }

  .settings-submit-btn {
    display: block;
    width: 100%;
    min-height: 20px;
    padding: 8px 30px;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.25;
    border: none;
    color: #fff;
    border-radius: 10px;
    background: #407bff;
    box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;

    &:hover {
      box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
    }

    &:active {
      box-shadow: none;
    }

    @media screen and (min-width: 768px) {
      width: 160px;
      height: 44px;
      padding: 10px 30px;
      margin-left: auto;
    }

    @media screen and (min-width: 1440px) {
      float: right;
    }
  }
`;
