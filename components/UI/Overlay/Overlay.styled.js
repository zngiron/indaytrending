import styled from '@emotion/styled';
import { animated } from 'react-spring';

export const Overlay = styled(animated.div)`
  position: fixed;
  z-index: 100;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000c;
  will-change: opacity;
  pointer-events: none;
  cursor: auto;

  &[data-overlay=true] {
    pointer-events: auto;
    cursor: pointer;
  }
`;

export default Overlay;
