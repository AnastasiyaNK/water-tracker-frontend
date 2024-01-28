import { styled } from "styled-components";

export const StyledWaterForm = styled.form`
  .add-water-container {
  }
  .choose-water-value-container {
  }
  .choose-title {
    font-size: 18px;
    line-height: 1.1;
    margin-bottom: 16px;
    font-weight: 500;
  }
  .water-amount {
    font-size: 16px;
    line-height: 1.2;
    font-weight: 400;
    margin-bottom: 12px;
  }
  .water-controls-container {
    width: 194px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
  }
  .water-control-btn {
    width: 44px;
    height: 44px;
    border-radius: 40px;
    border-color: #9ebbff;
    fill: #407bff;
  }
  .water-amount-value {
    font-size: 18px;
    line-height: 1.1;
    font-weight: 700;
    color: #407bff;
    border-radius: 40px;
    background: #d7e3ff;
    padding: 8px 24px;
  }
  .input-group {
    display: flex;
    flex-direction: column;
  }
  .input-group-text {
    font-size: 16px;
    line-height: 1.2;
    font-weight: 400;
    margin-bottom: 12px;
  }
  .input-group-input {
    border-color: #d7e3ff;
    border-radius: 10px;
    box-shadow: none;
    height: 44px;
  }
  .bold {
    font-size: 18px;
    line-height: 1.1;
    font-weight: 500;
    margin-top: 24px;
    margin-bottom: 16px;
  }
  .form-action-container {
    margin-top: 24px;
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .form-action-water-value {
    font-size: 18px;
    line-height: 1.1;
    font-weight: 700;

    color: #407bff;
  }
  .form-save-btn {
    margin-left: 24px;

    display: block;
    width: 160px;
    min-height: 44px;
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
  }
`;
