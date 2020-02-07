import React from 'react';
import PropTypes from 'prop-types';

import ReposList from 'components/containers/ReposList';
import IssuesList from 'components/containers/IssuesList';

import { MainViewWrapper } from './MainView.styles';

const MainView = ({
  activeRepo,
  activeIssue,
  setActiveRepo,
  setActiveIssue,
}) => {
  return (
    <MainViewWrapper>
      <ReposList
        activeRepo={activeRepo}
        setActiveRepo={setActiveRepo}
      />
      <IssuesList
        activeRepo={activeRepo}
        activeIssue={activeIssue}
        setActiveIssue={setActiveIssue(activeRepo)}
      />
    </MainViewWrapper>
  );
};

MainView.propTypes = {
  activeRepo: PropTypes.number.isRequired,
  activeIssue: PropTypes.number.isRequired,
  setActiveRepo: PropTypes.func.isRequired,
  setActiveIssue: PropTypes.func.isRequired,
};

export default MainView;
