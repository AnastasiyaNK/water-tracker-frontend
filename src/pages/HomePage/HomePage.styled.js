import styled from 'styled-components';
import imgFon from '../../assets/images/bubble-desktop.png';
import imgBotle from '../../assets/images/botle-home-desc.png';

export const Fon = styled.div`
  width: 1440px;
  height: 800px;
  background-image: url(${imgFon}), url(${imgBotle});

  background-repeat: no-repeat;
  background-position: center, 83px 118px;
`;
