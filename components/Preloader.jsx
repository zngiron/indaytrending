import React from 'react';
import styled from '@emotion/styled';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  margin: 1.25rem;
`;

const Preloader = () => (
  <Root>
    <FontAwesomeIcon icon={['far', 'spinner-third']} size="2x" spin />
  </Root>
);

export default Preloader;
