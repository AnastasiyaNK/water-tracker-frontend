import styled from 'styled-components';
import BottleSing from 'assets/images/bottle-sign-in-desk.png';
import BubbleFon from 'assets/images/bubble-desktop.png';

export const StyledLoginPage = styled.div`
  padding: 12px 0px;
  background: #fff;
  max-width: 1440px;
  width: 100%;
  height: 100%;
  background-size: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${BottleSing}), url(${BubbleFon});

  .block-right {
    position: relativ;
  }
`;