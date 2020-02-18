import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import actionCreators from 'actionCreators';
import IssuesList from './IssuesList';

const { updateIssueOrder } = actionCreators;

const ConnectedIssuesList = ({ issues, repoId, ...props }) => {
  const issueSet = repoId && issues[repoId] ? issues[repoId] : [];

  return <IssuesList {...props} issues={issueSet} repoId={repoId} />;
};

const mapStateToProps = ({ issues, location }) => ({
  issues,
  repoId: location.payload.repoId,
  activeIssue: location.payload.issueId,
});

const mapDispatchToProps = (dispatch) => ({
  saveIssueOrder: ({ repoId, issueOrder }) => dispatch(updateIssueOrder({ repoId, issueOrder })),
});

ConnectedIssuesList.propTypes = {
  issues: PropTypes.shape({}).isRequired,
  repoId: PropTypes.number,
};

ConnectedIssuesList.defaultProps = {
  repoId: undefined,
};

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedIssuesList);
