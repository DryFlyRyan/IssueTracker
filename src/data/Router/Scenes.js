import React from 'react';
import PropTypes from 'prop-types';
import { NOT_FOUND } from 'redux-first-router';
import actionConstants from 'actionConstants';

import MainView from 'views/Main';
import PersonalTokenForm from 'views/PersonalTokenForm';

const {
  HOMEPAGE,
  REPOS_PAGE,
} = actionConstants;

const Scenes = ({
  page,
}) => {
  switch (page) {
    case HOMEPAGE:
      return <PersonalTokenForm />;
    case REPOS_PAGE:
      return <MainView />;
    case NOT_FOUND:
    default:
      return null;
  }
};

Scenes.propTypes = {
  page: PropTypes.string.isRequired,
};

export default Scenes;
