import React from 'react';
import dynamic from 'next/dynamic';

import * as UI from './Sidebar.styled';

const Adsense = dynamic(import('../Ads/Adsense'));

const Sidebar = () => (
  <UI.Sidebar>
    <UI.Section>
      <UI.Title>Sponsors</UI.Title>
      <Adsense slot="2530090260" />
    </UI.Section>
  </UI.Sidebar>
);

export default Sidebar;
