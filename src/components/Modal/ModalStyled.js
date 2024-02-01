import styled from 'styled-components';

export const StyledModalBackdrop = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.8);
  overflow: hidden;
  z-index: 10;

  //--- settings modal window styles for tel tab and desk--\\
  .settings-modal {
    position: relative;
    height: auto;
    max-height: 90vh;
    overflow-y: auto;
    background-color: #ffffff;
    color: black;
    padding: 32px 12px;
    border-radius: 10px;
    font-size: 18px;
    line-height: 1.1;

    @media (min-width: 1440px) {
      width: 1008px;
      padding: 32px 24px;
    }

    @media (min-width: 768px) and (max-width: 1439px) {
      width: 704px;
      padding: 32px 24px;
    }
    @media (min-width: 320px) and (max-width: 767px) {
      width: 280px;
    }
  }
  //--- settings modal window styles for tel tab and desk---\\

  //--- daily norma modal window styles for tel tab and desk---\\
  .daily-norma {
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
  }
  //--- daily norma modal window styles for tel tab and desk---\\

  .title {
    font-size: 26px;
    line-height: 1.25;
    margin-bottom: 24px;
  }

  .close-btn {
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
  }

  .close-btn-svg {
    path {
      transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
      stroke: #407bff;
    }
  }

  .close-btn-svg:hover {
    path {
      stroke: #ff9d43;
    }
  }


  

`;
