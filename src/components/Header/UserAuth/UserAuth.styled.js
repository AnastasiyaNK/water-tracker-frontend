import styled from "styled-components";

import { Link } from "react-router-dom";

export const WrapperSignin = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  cursor: pointer;

  & p {
    font-size: 18px;
    color: #407bff;
    font-weight: 400;
    line-height: 24px;
    transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
      color: #ff9d43;
    }

    @media screen and (max-width: 767px) {
      font-size: 16px;
    }
  }
`;
