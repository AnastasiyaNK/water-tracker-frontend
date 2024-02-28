import styled from "styled-components";

export const PortionsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  width: 264px;
  height: 212px;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 4px;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    width: 656px;
  }

  @media screen and (min-width: 1440px) {
    width: 544px;
  }

  .motivation {
    text-align: center;
    font-size: 16px;
    color: var(--accentPrimari);
  }
`;

export const Portions = styled.ul`
  li {
    padding-bottom: 12px;
  }

  li:not(:first-child) {
    padding-top: 12px;
  }
  ::-webkit-scrollbar {
    width: 4px;
  }
`;

export const Portion = styled.li`
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--lightBlueSecondary);

  .icon-glass {
    width: 26px;
    height: 26px;
    margin-right: 12px;

    @media screen and (min-width: 768px) {
      width: 36px;
      height: 36px;
    }
  }
`;

export const Ml = styled.span`
  color: var(--accentPrimari);
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  margin-right: 12px;

  @media screen and (min-width: 768px) {
    margin-right: 24px;
  }
`;

export const Time = styled.span`
  font-size: 12px;
  font-weight: 400;
  line-height: 2;
  color: var(--blackPrimari);
`;

export const Edit = styled.div`
  margin-left: auto;
  margin-right: 4px;

  button:first-child {
    margin-right: 18px;
  }
`;

export const Button = styled.button`
  padding: 0;
  border: none;
  background-color: transparent;

  & svg {
    width: 16px;
    height: 16px;
  }
`;
