import styled from "styled-components";
export const StyledLoginForm = styled.form`

 @media screen and (min-width: 768px) {
      top: 50%;
      left: 60%;
      width: 100%;
      max-width: 384px;
      padding: 5px;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-top: 120px;
      margin-bottom: 140px;
  }

  @media only screen and (max-width: 600px) {
      margin: 0 auto;
      padding-top: 24px;
      display: flex;
      cursor: pointer;
      flex-direction: column;
      gap: 16px;
      max-width: 280px;
  }

  .block-right {
    display: flex;
  }

  .title {
    color: #2f2f2f;
    font-family: Roboto;
    font-size: 26px;
    font-style: normal;
    font-weight: 500;
    margin-bottom: 16px;
    line-height: 1.2;
  }

  

  .label-text {
    font-size: 18px;
    font-weight: 400;
    line-height: 1.3;
    display: flex;
    gap: 8px;
    flex-direction: column;
    color:#2f2f2f;
    font-family: Roboto;
    font-style: normal;
    width: 100%;
    position: relative;
  }
  .input {

    color: #9ebbff;
    font-size: 16px;
    border-radius: 6px;
    border: 1px solid #d7e3ff;
    background: #fff;
    padding: 12px 10px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    display: flex;
    gap: 10px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 125% */
    outline: none;

    &::placeholder {
      color: #9ebbff;
      font-size: 16px;
      font-weight: 400;
      line-height: 1.23;
    }
  }

  
  .button {
    margin-top: 16px;
    display: flex;
    padding: 10px 30px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border: none;

    border-radius: 10px;
    background: #407bff;
    color: #fff;
    box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
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
`;
