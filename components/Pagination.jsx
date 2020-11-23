import { memo } from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as Global from './Global';
import * as Button from './Button';

const Root = styled(Global.Container)`
  display: flex;
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;

  ${Button.Primary} {
    margin-right: 0.5rem;
  }
`;

const Text = styled.span`
  margin: 0 0.5rem;
`;

const Pagination = ({ posts, category }) => (
  <Root>
    {posts.pageInfo.hasPreviousPage && (
      <Link
        href={`/page?category=${category.slug}&before=${posts.pageInfo.startCursor}`}
        prefetch={false}
        passHref
      >
        <Button.Primary>
          <FontAwesomeIcon icon={['far', 'chevron-left']} />
          <Text>Previous</Text>
        </Button.Primary>
      </Link>
    )}
    {posts.pageInfo.hasNextPage && (
      <Link
        href={`/page?category=${category.slug}&after=${posts.pageInfo.endCursor}`}
        prefetch={false}
        passHref
      >
        <Button.Primary>
          <Text>Next</Text>
          <FontAwesomeIcon icon={['far', 'chevron-right']} />
        </Button.Primary>
      </Link>
    )}
  </Root>
);

export default memo(Pagination);
