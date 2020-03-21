import React from 'react';

import * as UI from './Sidebar.styled';
import Adsense from '../Ads/Adsense';
import Taboola from '../Ads/Taboola';

const Sidebar = () => (
  <UI.Sidebar>
    <UI.Section>
      <UI.Title>Sponsors</UI.Title>
      <Adsense slot="2530090260" />
    </UI.Section>
    <UI.Section>
      <UI.Title>Keep Reading</UI.Title>
      <Taboola />
    </UI.Section>
  </UI.Sidebar>
);

export default Sidebar;
