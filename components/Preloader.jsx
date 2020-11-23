import styled from '@emotion/styled';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Root = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Preloader = () => (
  <Root>
    <FontAwesomeIcon icon={['far', 'spinner-third']} size="2x" spin />
  </Root>
);

export default Preloader;
