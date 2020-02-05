import React from 'react';
import PropTypes from 'prop-types';
import Scenes from 'data/Router/Scenes';

const AppWrapper = ({
  page,
}) => (
  <div>
    <Scenes
      page={page}
    />
  </div>
);

AppWrapper.propTypes = {
  page: PropTypes.string.isRequired,
};

export default AppWrapper;
