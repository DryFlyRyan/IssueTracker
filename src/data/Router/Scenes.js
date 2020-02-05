import React from 'react';
import PropTypes from 'prop-types';
import { NOT_FOUND } from 'redux-first-router';
import actionConstants from 'actionConstants';

import PersonalTokenForm from 'views/PersonalTokenForm';

const {
  HOMEPAGE,
} = actionConstants;

const Scenes = ({
  page,
}) => {
  switch (page) {
    case HOMEPAGE:
      return <PersonalTokenForm />;
    case NOT_FOUND:
    default:
      return null;
  }
};

Scenes.propTypes = {
  page: PropTypes.string.isRequired,
};

export default Scenes;
