import { styled } from "styled-components";

export const StyledModalButton2 = styled.div`
  //TODO: TEMPORARY HIDING !!!

  /* .hidden {
    visibility: hidden;
  } */

  //TODO: TEMPORARY HIDING !!!

  .open-modal-btn {
    display: block;
    width: 160px;
    min-height: 44px;
    padding: 8px 30px;
    margin-bottom: 8px;
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
