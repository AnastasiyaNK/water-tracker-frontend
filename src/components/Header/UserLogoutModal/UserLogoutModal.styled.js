import styled from "styled-components";

export const ModalHead = styled.div`
  margin-bottom: 24px;
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const CloseBtn = styled.button`
  border: none;
  background-color: transparent;

  & img {
    width: 24px;
    height: 24px;
    color: #407bff;
    transition: fill 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const SmaleLogoutHeader = styled.h4`
  margin-bottom: 24px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
  text-align: left;
`;
export const ModalHeader = styled.h3`
  font-size: 26px;
  font-weight: 500;
  line-height: 1.23;
`;

export const ModalOverlay = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalLogout = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 280px;
  height: 260px;
  padding: 32px 24px;
  z-index: 100;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  border-radius: 10px;
  background: #ffffff;
  text-align: center;

  @media screen and (min-width: 768px) {
    width: 592px;
    height: 208px;
  }
  @media only screen and (min-width: 1440px) {
    width: 592px;
  }
`;

export const DivLogoutBtn = styled.div`
  width: 100%;
  display: flex;
  gap: 24px;
  flex-direction: column;

  & button {
    display: flex;
    padding: 8px 30px;
    justify-content: center;
    align-items: center;
    gap: 10px;

    color: #407bff;

    line-height: 1.25;

    border: none;
    border-radius: 10px;
    background: #d7e3ff;

    transition: box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1);

    &:first-child {
      color: #ffffff;
      background: #ef5050;
      box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
    }

    &:first-child:hover {
      box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
      cursor: pointer;
    }

    &:last-child:hover {
      box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
      cursor: pointer;
    }

    &:active {
      box-shadow: 0 0;
    }
  }

  @media screen and (min-width: 768px) {
    height: 44px;
    gap: 24px;
    flex-direction: row-reverse;

    & button {
      width: 160px;
    }
    @media only screen and (min-width: 1440px) {
      flex-direction: row-reverse;
      justify-content: flex-end;
    }
  }
`;
