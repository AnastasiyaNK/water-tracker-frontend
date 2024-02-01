import { styled } from "styled-components";

export const StyledWaterForm = styled.form`
  .water-amount-value-padding {
    padding: 8px 22px;
  }
  .water-amount-time-container {
    display: flex;
    align-items: center;
    gap: 16px;
    width: 254px;
    border-radius: 10px;
    background: #ecf2ff;
    padding: 12px 24px;
    margin-bottom: 24px;
  }
  .water-glass {
  }
  .time-value {
    font-size: 12px;
    line-height: 2;
    margin-left: 8px;
  }
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
    display: flex;
    gap: 7px;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 24px;
  }
  .water-control-btn {
    width: 44px;
    height: 44px;

    border: 1px solid blue;
    background-color: transparent;
    border-radius: 40px;
    border-color: #9ebbff;
    fill: #407bff;
  }
  .svg-btn {
    display: block;
    margin: 0 auto;
  }
  .water-amount-value {
    font-size: 18px;
    line-height: 1.1;
    font-weight: 700;
    color: #407bff;
    border-radius: 40px;
    background: #d7e3ff;
    padding: 8px 20px;
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
    border: 1px solid #d7e3ff;
    color: #407bff;
    border-radius: 10px;
    box-shadow: none;
    height: 44px;
    padding: 12px 10px;
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
  .glass-value-bold {
    font-weight: 400;
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
    &:disabled {
      background-color: grey;
      cursor: not-allowed;
    }
  }
`;
