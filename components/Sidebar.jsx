import React from 'react';
import dynamic from 'next/dynamic';
import styled from '@emotion/styled';

export const Root = styled.aside`
  min-width: 18.75rem;
`;

export const Section = styled.section`
  position: sticky;
  top: calc(var(--header-height) + 1.25rem);
  background-color: var(--color-white);
`;

export const Social = styled.div`
  display: flex;
`;

export const Facebook = styled.div`
  margin: 0 auto;
`;

const Adsense = dynamic(import('./Adsense'));

const Sidebar = () => (
  <Root>
    <Section>
      <Adsense slot="2530090260" />
    </Section>
  </Root>
);

export default Sidebar;
