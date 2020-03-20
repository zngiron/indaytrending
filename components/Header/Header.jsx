import React, { useState } from 'react';
import Link from 'next/link';
import { useSpring } from 'react-spring';
import { useQuery } from '@apollo/react-hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as S from './Header.styled';
import Overlay from '../UI/Overlay';

import { GET_CATEGORIES } from '../../library/Queries.graphql';

const handleIcon = ({ loading, error, menu }) => {
  if (loading) return 'spinner-third';
  if (error) return 'exclamation-circle';

  return menu ? 'times' : 'bars';
};

const Header = () => {
  const [menu, setMenu] = useState(false);
  const { loading, error, data } = useQuery(GET_CATEGORIES);

  const springIcon = useSpring({ transform: menu ? 'rotate(-180deg)' : 'rotate(0deg)' });
  const springMenu = useSpring({ transform: menu ? 'translate3d(-20rem, 0, 0)' : 'translate3d(0rem, 0 ,0)' });

  const handleMenu = ({ toggle } = {}) => ((toggle) ? setMenu(!menu) : setMenu(false));

  return (
    <>
      <Overlay overlay={menu || undefined} onClick={() => handleMenu()} />
      <S.Header>
        <Link href="/" passHref>
          <S.Logo onClick={() => handleMenu()}>
            <S.Image src="/indaytrending-icon.png" alt="Inday Trending" title="Inday Trending" width={40} height={40} loading="eager" draggable={false} />
            <S.Title>Inday Trending</S.Title>
          </S.Logo>
        </Link>
        <S.Nav>
          <S.Button aria-label="menu" onClick={() => handleMenu({ toggle: true })}>
            <S.Icon style={springIcon}>
              <FontAwesomeIcon icon={['far', handleIcon({ loading, error, menu })]} spin={loading} />
            </S.Icon>
          </S.Button>
          {data && (
            <S.Menu style={springMenu}>
              {data.categories.nodes.map((category) => (
                <S.List key={category.id}>
                  <Link href="/[category]" as={`/${category.slug}`} passHref>
                    <S.Item onClick={() => handleMenu()}>{category.name}</S.Item>
                  </Link>
                </S.List>
              ))}
            </S.Menu>
          )}
        </S.Nav>
      </S.Header>
    </>
  );
};

export default Header;
