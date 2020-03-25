import React from 'react';
import Link from 'next/link';

import * as UI from './Footer.styled';

const Footer = () => (
  <UI.Footer>
    <UI.Container>
      <Link href="/" passHref>
        <UI.Logo title="Inday Trending">
          <UI.Image
            src="/indaytrending-icon.png"
            width={80}
            height={80}
            title="Inday Trending"
            alt="Inday Trending"
            draggable={false}
            loading="eager"
          />
          <UI.Image
            src="/indaytrending-logo.svg"
            width={160}
            height={80}
            title="Inday Trending"
            alt="Inday Trending"
            draggable={false}
            loading="eager"
          />
        </UI.Logo>
      </Link>
      <UI.Nav>
        <Link href="/disclaimer" passHref>
          <UI.Item>Disclaimer</UI.Item>
        </Link>
        <UI.Divider />
        <Link href="/privacy" passHref>
          <UI.Item>Privacy Policy</UI.Item>
        </Link>
        <UI.Divider />
        <UI.Item href="https://www.dmca.com" rel="noopener noreferrer" target="__blank">DMCA Policy</UI.Item>
      </UI.Nav>
      <UI.Copyright>&copy;2020 Likha Adhika Media</UI.Copyright>
    </UI.Container>
  </UI.Footer>
);

export default Footer;
