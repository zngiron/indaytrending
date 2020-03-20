import React from 'react';
import Link from 'next/link';

import * as S from './Footer.styled';

const Footer = () => (
  <S.Footer>
    <S.Container>
      <Link href="/" passHref>
        <S.Logo title="Inday Trending">
          <S.Image src="/indaytrending-icon.png" width={80} height={80} alt="Inday Trending" title="Inday Trending" loading="eager" draggable={false} />
          <S.Image src="/indaytrending-logo.svg" width={160} height={80} alt="Inday Trending" title="Inday Trending" loading="eager" draggable={false} />
        </S.Logo>
      </Link>
      <S.Nav>
        <Link href="/disclaimer" passHref>
          <S.Item>Disclaimer</S.Item>
        </Link>
        <span>{' | '}</span>
        <Link href="/privacy" passHref>
          <S.Item>Privacy Policy</S.Item>
        </Link>
        <span>{' | '}</span>
        <S.Item href="https://www.dmca.com" rel="noopener noreferrer" target="__blank">DMCA Policy</S.Item>
      </S.Nav>
      <S.Copyright>&copy;2020 Likha Adhika Media</S.Copyright>
    </S.Container>
  </S.Footer>
);

export default Footer;
