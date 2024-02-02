import styled from "styled-components";
import { ReactComponent as CalendarIconSvg } from "../../assets/icons/calendar-days.svg";
import { ReactComponent as SettingsIconSvg } from "../../assets/icons/wrench-screwdriver.svg";
import { ReactComponent as StatisticsIconSvg } from "../../assets/icons/presentation-chart-bar.svg";

export const WelcomeContainer = styled.div`
  width: 320px;
  min-height: calc(100vh - 80px);
  padding: 0 20px 40px 20px;
  margin: 0 auto;
  background-size: cover;
  background-size: 100%;
  background-position: center bottom;
  background-repeat: no-repeat;
  padding-top: 24px;

  @media screen and (max-width: 767px) and (-webkit-min-device-pixel-ratio: 2),
    (max-width: 767px) and (min-resolution: 192dpi) {
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    width: 768px;
    padding-top: 40px;
    min-height: calc(100vh - 88px);
  }

  @media screen and (min-width: 768px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 768px) and (min-resolution: 192dpi) {
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: center;
    gap: 81px;
    width: 1440px;
    padding-top: 40px;
    min-height: calc(100vh - 80px);
  }

  .containerBenefits {
    margin-bottom: 40px;

    @media only screen and (min-width: 767px) and (max-width: 1439px) {
      margin-bottom: 60px;
    }

    @media only screen and (min-width: 1440px) {
      margin-bottom: 185px;
    }
  }

  .welcomeTitle {
    font-size: 28px;
    font-weight: 700;
    color: #2f2f2f;
    line-height: calc(32 / 28);
    text-align: left;
    margin-bottom: 16px;

    @media only screen and (min-width: 768px) {
      font-size: 36px;
      line-height: calc(42 / 36);
    }
  }

  .welcomeInfoTitle {
    font-size: 24px;
    font-weight: 400;
    color: #2f2f2f;
    line-height: calc(30 / 24);
    text-align: left;
    margin-bottom: 24px;

    @media only screen and (min-width: 768px) {
      font-size: 26px;
      line-height: calc(32 / 26);
    }
  }

  .welcomeListTitle {
    font-size: 18px;
    font-weight: 500;
    line-height: calc(20 / 18);
    text-align: left;
    margin-bottom: 12px;
  }

  .welcomeListContent {
    margin-bottom: 24px;

    @media screen and (min-width: 768px) and (max-width: 1439px) {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  .welcomeListItems {
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 8px;

    & p {
      font-size: 18px;
      line-height: calc(20 / 16);
    }

    @media screen and (max-width: 767px) {
      &:not(:last-child) {
        margin-bottom: 16px;
      }
    }
    @media screen and (min-width: 1440px) {
      &:not(:last-child) {
        margin-bottom: 16px;
      }
    }
  }

  .welcomeButton {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    padding: 8px 30px;
    width: 280px;
    border: none;
    border-radius: 10px;
    outline: none;
    color: #ffffff;
    background-color: #407bff;
    box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
    transition: box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    &:hover {
      box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
    }
    &:active {
      box-shadow: none;
    }
    &:disabled {
      background-color: #9ebbff;
      cursor: not-allowed;
    }
    @media screen and (min-width: 768px) {
      width: 336px;
      height: 44px;
      line-height: calc(24 / 18);
      font-size: 18px;
    }
    @media screen and (min-width: 1440px) {
      width: 384px;
      height: 44px;
    }
  }

  .containerDrinkInfo {
    padding: 24px 16px;
    border-radius: 10px;
    width: 100%;
    height: 100%;
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);
    background-color: #ecf2ff;

    @media screen and (min-width: 768px) {
      padding: 32px 24px;
      max-width: 494px;
    }

    @media screen and (min-width: 1440px) {
      margin-top: 34px;
    }
  }

  .drinkInfoTitle {
    font-size: 18px;
    line-height: calc(20 / 18);
    font-weight: 700;
    text-align: left;
    margin-bottom: 12px;
  }

  .drinkInfoItems {
    display: flex;
    align-items: center;
    gap: 8px;
    line-height: calc(20 / 16);
    font-size: 16px;

    &::before {
      content: "";
      border-style: solid;
      border-width: 0 8px 8px 0;
      border-radius: 50%;
      border-color: #407bff;
    }

    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

export const HabitDriveImg = styled(CalendarIconSvg)`
  @media only screen and (max-width: 767px) {
    height: 32px;
  }
`;

export const ViewStatisticsImg = styled(StatisticsIconSvg)`
  @media only screen and (max-width: 767px) {
    height: 32px;
  }
`;

export const PersonalRateSettingImg = styled(SettingsIconSvg)`
  @media only screen and (max-width: 767px) {
    height: 32px;
  }
`;
