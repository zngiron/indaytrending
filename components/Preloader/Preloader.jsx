import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as UI from './Preloader.styled';

const Preloader = ({ loading, error }) => (
  <UI.Preloader>
    <FontAwesomeIcon icon={['far', loading ? 'spinner-third' : 'exclamation-circle']} size="2x" spin={loading} />
    <UI.Text>
      {error && error.message}
      {loading && 'Loading'}
    </UI.Text>
  </UI.Preloader>
);

export default Preloader;
