import styled from '@emotion/styled';
import parse from 'html-react-parser';

import * as Global from './Global';

const Root = styled.div``;

const Container = styled(Global.Container)``;

const Title = styled.h1`
  font-size: 2rem;
  color: var(--color-primary);
`;

const Description = styled.div`
  margin-bottom: 1.25rem;
`;

const Content = ({ title, description }) => (
  <Root>
    <Container>
      {title && <Title>{parse(title)}</Title>}
      {description && <Description>{parse(description)}</Description>}
    </Container>
  </Root>
);

export default Content;
