import styled from "styled-components";

export const StyledRegisterForm = styled.form`
  margin: 0 auto;
  padding-top: 24px;
  display: flex;
  cursor: pointer;
  flex-direction: column;
  gap: 16px;
  max-width: 280px;

  @media screen and (min-width: 768px) {
    max-width: 336px;
    margin: 0 auto 0 32px;
    padding-top: 40px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 120px;
    max-width: 384px;
    margin: 0 198px 0 auto;
  }
`;
