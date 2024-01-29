import styled from "styled-components";

export const StyledMyDailyNormaModal = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  overflow: hidden;
`

export const SettingsModal = styled.div`
position: relative;
  height: auto;
  max-height: 90vh;
  overflow-y: auto;
  background-color: #ffffff;
  padding: 32px 24px;
  border-radius: 10px;
  font-size: 18px;
  line-height: 1.1;

  @media (min-width: 1440px) {
    width: 592px;
    padding: 32px 24px;
  }

  @media (min-width: 768px) and (max-width: 1439px) {
    width: 704px;
    padding: 32px 24px;
  }
  @media (min-width: 320px) and (max-width: 767px) {
    width: 280px;
    padding: 24px 12px;
  }
`
export const Title = styled.h2`
  font-size: 26px;
    line-height: 1.25;
    margin-bottom: 24px;
    color: #2f2f2f;
`

export const CloseBtn = styled.button`
  position: absolute;
    top: 36px;
    right: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: transparent;
    cursor: pointer;

    @media (min-width: 768px) {
      right: 24px;
    }

    & svg {
      width: 24px;
      height: 24px;

      path {
        transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
        stroke: #407bff;
      }
    }
`

export const Form = styled.form`
  margin-bottom: 24px;
`

export const TitleGender = styled.div`
  display: flex;
    flex-wrap: nowrap;
    margin-bottom: 12px;
`

export const TitleGenderList = styled.p`
  margin-right: 4px;
`

export const CalculatorWater  = styled.span`
  margin-right: 24px;
    color: #407bff;
`

export const TitleContent = styled.div`
  margin-bottom: 24px;
    border-style: solid;
    border-radius: 10px;
    border-color: #d7e3ff;
`

export const TitleContentWater = styled.p`
   margin: 10px;
    font-size: 12px;
    color: #8f8f8f;
`
export const TitleText = styled.span`
   color: #407bff;
`

export const SecondaryTitle = styled.h3`
  font-size: 18px;
    line-height: 20px;
    color: #2f2f2f;
    margin-bottom: 16px;
`

export const ListGender = styled.div`
  display: flex;
    gap: 24px;
    margin-bottom: 16px;
`

export const GenderName = styled.span`
  margin-left: 8px;
    font-size: 16px;
`

export const StatisticsCalculete = styled.p`
  font-size: 16px;
    line-height: 20px;
    color: #2f2f2f;
    margin-bottom: 8px;
`

export const StatisticsWatarDay = styled.span`
  font-size: 18px;
      line-height: 24px;
      color: #407bff;
`

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
`

export const SecondarySubtitle = styled.h3`
  font-size: 18px;
    line-height: 20px;
    color: #2f2f2f;
    margin-top: 24px;
    margin-bottom: 16px;
`

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
`

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
`
