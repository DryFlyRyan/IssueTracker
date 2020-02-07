import React from 'react';
import PropTypes from 'prop-types';
import Scenes from 'data/Router/Scenes';

import GlobalStyles from '../../../global.styles';
import { AppWrapperContainer } from './AppWrapper.styles';

const AppWrapper = ({
  page,
}) => (
  <AppWrapperContainer>
    <GlobalStyles />
    <Scenes
      page={page}
    />
  </AppWrapperContainer>
);

AppWrapper.propTypes = {
  page: PropTypes.string.isRequired,
};

export default AppWrapper;
