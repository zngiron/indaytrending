import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as S from './Preloader.styled';

const Preloader = ({ loading, error }) => (
  <S.Preloader>
    <FontAwesomeIcon icon={['far', loading ? 'spinner-third' : 'exclamation-circle']} size="2x" spin={loading} />
    <S.Text>
      {error && error.message}
      {loading && 'Loading'}
    </S.Text>
  </S.Preloader>
);

export default Preloader;
