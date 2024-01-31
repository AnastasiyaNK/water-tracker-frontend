import styled from 'styled-components';
import BottleSing from '../../assets/images/bottle-sign-in-desk.png';
import BubbleSing from '../../assets/images/bubble-desktop.png';

export const StyledWrapperPng = styled.div`
  min-height: calc(100vh - 76px);
  background-image: url(${BottleSing}), url(${BubbleSing});

  background-repeat: no-repeat;
  background-size: contain;
`;