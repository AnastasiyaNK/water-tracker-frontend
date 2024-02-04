import styled from "styled-components";

export const StyledRegisterContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: end;
  height: 100%;
  align-items: center;
  @media screen and (min-width: 768px) {
      position: relative;
    }
  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: flex-start;
    flex-direction: row-reverse;
  }
  }
`;

export const StyledRegisterForm = styled.form`
  max-width: 384px;
  display: flex;
  flex-direction: column;
  padding: 5px;
  width: 100%;
  margin-right: 90px;

  .title {
    color: #2f2f2f;
    font-size: 26px;
    font-weight: 500;
    line-height: 1.3;
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
    width: 280px;
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
`;
