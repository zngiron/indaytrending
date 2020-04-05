import React from 'react';

import Adsense from '../Ads/Adsense';

import * as UI from './Sidebar.styled';
import * as Typography from '../UI/Typography.styled';

const Sidebar = () => (
  <UI.Sidebar>
    <UI.Section>
      <Typography.Sub>Sponsors</Typography.Sub>
      <Adsense slot="2530090260" />
    </UI.Section>
  </UI.Sidebar>
);

export default Sidebar;
