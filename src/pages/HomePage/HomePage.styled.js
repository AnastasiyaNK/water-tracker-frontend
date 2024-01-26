import styled from 'styled-components';
import imgFon from '../../assets/images/bubble-desktop.png';
import imgBotle from '../../assets/images/Bottle-homepage-desctop.png';
import imgVector1 from '../../assets/images/Vector1.png';
import imgVector2 from '../../assets/images/Vector2.png';

export const Fon = styled.div`
  width: 1440px;
  height: 800px;
  background-image: url(${imgFon}), url(${imgBotle}), url(${imgVector1}),
    url(${imgVector2});
  background-repeat: no-repeat;
  background-position: center, 250px 150px, 113px 540px, 180px 420px;
`;
