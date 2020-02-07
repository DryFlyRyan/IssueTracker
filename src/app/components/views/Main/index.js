import React from 'react';
import { connect } from 'react-redux';
import actionConstants from 'actionConstants';
import actionCreators from 'actionCreators';

import MainView from './MainView';

const { REPOS_PAGE } = actionConstants;
const {
  goToPage,
  fetchIssues,
} = actionCreators;

const ConnectedMainView = (props) => <MainView {...props} />;

const mapStateToProps = ({ location }) => ({
  activeRepo: location.payload.repoId
    ? parseInt(location.payload.repoId, 10)
    : 0,
  activeIssue: location.payload.issueId
    ? parseInt(location.payload.issueId, 10)
    : 0,
});

const mapDispatchToProps = (dispatch) => ({
  setActiveRepo: (repoId) => {
    dispatch(goToPage(REPOS_PAGE, { repoId }));
    dispatch(fetchIssues({ repoId }));
  },
  setActiveIssue: (repoId) => {
    return (issueId) => {
      dispatch(goToPage(REPOS_PAGE, { repoId, issueId }));
    };
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedMainView);
