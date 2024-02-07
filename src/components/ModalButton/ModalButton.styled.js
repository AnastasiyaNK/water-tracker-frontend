import { styled } from 'styled-components';

export const StyledModalButton = styled.div`
  //TODO: TEMPORARY HIDING !!!
  /* .open-modal-btn {
    visibility: hidden;
  } */
  //TODO: TEMPORARY HIDING !!!

  .open-modal-btn {
    width: 280px;
    height: 36px;
    left: 526px;
    top: 825px;
    display: inline-flex;
    padding: 10px 30px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 10px;
    border: none;
    background: var(--Primery-Color-Blue, #407bff);
    box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
    color: white;

    @media (min-width: 320px) and (max-width: 767px) {
      min-width: 280px;
      height: 36px;
    }
    @media (min-width: 768px) and (max-width: 1220px) {
      max-width: 336px;
      height: 44px;
    }
    @media (min-width: 1440px) {
      max-width: 178px;
      height: 44px;
    }
  }
`;
