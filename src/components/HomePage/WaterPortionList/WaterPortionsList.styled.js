import styled from 'styled-components';

export const Portions = styled.div`
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  width: 534px;
  height: 36px;
  color: var(--Primery-Color-Black, #2f2f2f);
  font-family: Roboto;
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
`;
export const Portion = styled.div`
  margin-left: 12px;
  color: var(--Primery-Color-Blue, #407bff);
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;
export const Time = styled.div`
  width: 24px;
  margin-left: 16px;
  color: var(--Primery-Color-Black, #2f2f2f);
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;
export const Edit = styled.div`
  display: flex;
  gap: 18px;
  margin-left: 325px;
`;

export const PortionsList = styled.div`
  height: 220px;
  display: flex;
  gap: 24px;
  flex-direction: column;

  //---Стилізація скроллбара--/////
  * {
    scrollbar-width: thin;
    scrollbar-color: #9ebbff #d7e3ff;
  }
  *::-webkit-scrollbar {
    width: 1px;
  }
  *::-webkit-scrollbar-track {
    background-color: #f5f5f5;
  }
  *::-webkit-scrollbar-thumb {
    width: 10px;
    background-color: red;
  }
`;

export const Addwater = styled.div`
  top: 25px;
  width: 82px;
  height: 24px;
  margin-top: 12px;
  color: var(--Primery-Color-Blue, #407bff);
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;

export const ScrollableDiv = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
`;
export const Button = styled.button`
  width: 16px;
  height: 16px;
  border: none;
  background: none;
`;
