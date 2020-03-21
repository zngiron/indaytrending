import React from 'react';

import * as UI from './Sidebar.styled';
import Adsense from '../Ads/Adsense';

const Sidebar = () => (
  <UI.Sidebar>
    <UI.Section>
      <UI.Title>Sponsors</UI.Title>
      <Adsense slot="2530090260" />
    </UI.Section>
  </UI.Sidebar>
);

export default Sidebar;
