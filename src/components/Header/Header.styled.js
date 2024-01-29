import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    margin-top: 16px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 12px;
    margin-bottom: 20px;
  }
`;

export const WrapperLogo = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  width: 108px;
  height: 48px;
  text-decoration: none;
`;
