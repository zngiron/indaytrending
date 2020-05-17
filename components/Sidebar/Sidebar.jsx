import React from 'react';
import dynamic from 'next/dynamic';

import * as UI from './Sidebar.styled';

const Adsense = dynamic(import('../Ads/Adsense'));

const Sidebar = () => (
  <UI.Sidebar>
    <UI.Section>
      <UI.Social>
        <UI.Facebook
          className="fb-page"
          data-href="https://www.facebook.com/indaytrending/"
          data-width="300"
          data-tabs=""
          data-show-facepile={false}
          data-hide-cta
        />
      </UI.Social>
      <Adsense slot="2530090260" />
    </UI.Section>
  </UI.Sidebar>
);

export default Sidebar;
