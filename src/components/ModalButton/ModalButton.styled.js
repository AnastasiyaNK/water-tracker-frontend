import { styled } from "styled-components";

export const StyledModalButton = styled.button`
  width: 280px;
  height: 36px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  border: none;
  background: var(--accentPrimari, #407bff);
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  color: var(--whitePrimari, #fff);

  @media (min-width: 768px) and (max-width: 1220px) {
    width: 336px;
    height: 44px;
  }

  @media (min-width: 1440px) {
    width: 178px;
    height: 44px;
  }

  & svg {
    path {
      transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
      stroke: var(--whitePrimari, #fff);
    }
    width: 24px;
    height: 24px;
  }

  &:hover,
  &:focus {
    box-shadow: 0 4px 14px 0 rgba(64, 123, 255, 0.54);
  }
`;
