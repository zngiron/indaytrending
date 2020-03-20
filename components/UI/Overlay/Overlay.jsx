import React from 'react';
import { useSpring } from 'react-spring';
import * as S from './Overlay.styled';

const Overlay = (props) => {
  const { overlay } = props;
  const { opacity } = useSpring({ opacity: overlay ? 1 : 0 });

  return (
    <S.Overlay {...props} style={{ opacity }} data-overlay={overlay} />
  );
};

export default Overlay;
