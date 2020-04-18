import React from 'react';
import Link from 'next/link';

import * as UI from './Footer.styled';
import * as Layout from '../UI/Layout.styled';

const Footer = () => (
  <UI.Footer>
    <Layout.Container as={UI.Container}>
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
      </UI.Nav>
      <UI.Copyright>&copy;2020 Likha Adhika Media</UI.Copyright>
    </Layout.Container>
  </UI.Footer>
);

export default Footer;
