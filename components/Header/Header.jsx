import React, { useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useSpring } from 'react-spring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as UI from './Header.styled';
import categories from './Header.json';

const Overlay = dynamic(import('../Overlay'));

const Header = () => {
  const [menu, setMenu] = useState(false);

  const springIcon = useSpring({ transform: menu ? 'rotate(-180deg)' : 'rotate(0deg)' });
  const springMenu = useSpring({ transform: menu ? 'translate3d(-20rem, 0, 0)' : 'translate3d(0rem, 0 ,0)' });

  const handleMenu = ({ toggle } = {}) => ((toggle) ? setMenu(!menu) : setMenu(false));

  return (
    <>
      <Overlay overlay={menu || undefined} onClick={() => handleMenu()} />
      <UI.Header>
        <Link href="/" passHref>
          <UI.Logo onClick={() => handleMenu()}>
            <UI.Image
              src="/indaytrending-icon.png"
              alt="Inday Trending"
              title="Inday Trending"
              width={40}
              height={40}
              loading="eager"
              draggable={false}
            />
            <UI.Title>Inday Trending</UI.Title>
          </UI.Logo>
        </Link>
        <UI.Nav>
          <UI.Button aria-label="menu" onClick={() => handleMenu({ toggle: true })}>
            <UI.Icon style={springIcon}>
              <FontAwesomeIcon icon={['far', menu ? 'times' : 'bars']} />
            </UI.Icon>
          </UI.Button>
          <UI.Menu style={springMenu}>
            {categories.nodes.map((category) => (
              <UI.List key={category.id}>
                <Link href="/[category]" as={`/${category.slug}`} passHref>
                  <UI.Item onClick={() => handleMenu()}>{category.name}</UI.Item>
                </Link>
              </UI.List>
            ))}
          </UI.Menu>
        </UI.Nav>
      </UI.Header>
    </>
  );
};

export default Header;
