import styled from "styled-components";

export const Form = styled.form`
  width: 544px;
  margin-bottom: 24px;

  @media (min-width: 768px) and (max-width: 1439px) {
    width: 656px;
  }
  @media (min-width: 320px) and (max-width: 767px) {
    width: 256px;
  }
`;

export const TitleGender = styled.div`
  display: flex;
  flex-wrap: nowrap;
  margin-bottom: 12px;

  @media (min-width: 320px) and (max-width: 767px) {
    display: block;
  }
`;

export const TitleGenderList = styled.p`
  margin-right: 4px;

  @media (min-width: 320px) and (max-width: 767px) {
    margin-top: 16px;
  }
`;

export const CalculatorWater = styled.span`
  margin-right: 24px;
  color: #407bff;

  @media (min-width: 320px) and (max-width: 767px) {
    margin-bottom: 16px;
  }
`;

export const TitleContent = styled.div`
  margin-bottom: 24px;
  border-style: solid;
  border-radius: 10px;
  border-color: #d7e3ff;

  @media (min-width: 1440px) {
    width: 544px;
  }

  @media (min-width: 768px) and (max-width: 1439px) {
    width: 656px;
  }
  @media (min-width: 320px) and (max-width: 767px) {
    width: 256;
  }
`;

export const TitleContentWater = styled.p`
  width: 524px;
  margin: 10px;
  font-size: 12px;
  color: #8f8f8f;

  @media (min-width: 768px) and (max-width: 1439px) {
    width: 636px;
  }
  @media (min-width: 320px) and (max-width: 767px) {
    width: 236px;
  }
`;
export const TitleText = styled.span`
  color: #407bff;
`;

export const SecondaryTitle = styled.h3`
  font-size: 18px;
  line-height: 20px;
  color: #2f2f2f;
  margin-bottom: 16px;
`;

export const ListGender = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 16px;
`;

export const GenderName = styled.span`
  margin-left: 8px;
  font-size: 16px;
`;

export const StatisticsCalculete = styled.p`
  font-size: 16px;
  line-height: 20px;
  color: #2f2f2f;
  margin-bottom: 8px;
`;

export const StatisticsWatarDay = styled.span`
  font-size: 18px;
  line-height: 24px;
  color: #407bff;
`;

export const MainInput = styled.input`
  font-size: 16px;
  line-height: 1.25;
  width: 544px;
  height: 44px;
  padding: 12px 10px;
  border-radius: 6px;
  border: 1px solid #d7e3ff;
  color: #407bff;
  margin-bottom: 16px;

  @media (min-width: 768px) and (max-width: 1439px) {
    width: 656px;
  }
  @media (min-width: 320px) and (max-width: 767px) {
    width: 256px;
  }
`;

export const SecondarySubtitle = styled.h3`
  font-size: 18px;
  line-height: 20px;
  color: #2f2f2f;
  margin-top: 24px;
  margin-bottom: 16px;
`;

export const MainInputBtn = styled.input`
  font-size: 16px;
  line-height: 1.25;
  width: 544px;
  height: 44px;
  padding: 12px 10px;
  border-radius: 6px;
  border: 1px solid #d7e3ff;
  color: #407bff;
  margin-bottom: 24px;

  @media (min-width: 768px) and (max-width: 1439px) {
    width: 656px;
  }
  @media (min-width: 320px) and (max-width: 767px) {
    width: 256px;
  }
`;

export const SettingsSubmitBtn = styled.button`
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
`;
