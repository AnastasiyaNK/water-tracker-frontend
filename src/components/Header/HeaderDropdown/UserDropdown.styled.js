import styled from "styled-components";

export const ModalOverlay = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  z-index: 10;
`;

export const ModalWrapper = styled.div`
  position: absolute;
  width: ${({ $lng }) => ($lng === "en" ? "auto" : "100%")};
  min-width: ${({ $lng }) => ($lng === "en" ? "auto" : "171px")} ;
  top: 100%;
  left: 100%;
  transform: translate(-100%, 0);
  display: inline-flex;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  z-index: 100;

  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.2);
`;

export const Button = styled.button`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 8px;
  padding: 0;
  width: 100%;
  border: none;
  background-color: #ffffff;
  cursor: pointer;

  & svg {
    path {
      transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
      stroke: #407bff;
    }
    width: 16px;
    height: 16px;
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

  & p {
    width: 54px;
    color: #407bff;
    font-size: 16px;
    line-height: calc(20 / 16);
    transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
