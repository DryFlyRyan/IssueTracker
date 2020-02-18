import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import IssuesList from './IssuesList';

const ConnectedIssuesList = ({ issues, repoId, ...props }) => {
  const issueSet = repoId && issues[repoId] ? issues[repoId] : [];

  return <IssuesList {...props} issues={issueSet} />;
};

const mapStateToProps = ({ issues, location }) => ({
  issues,
  repoId: location.payload.repoId,
  activeIssue: location.payload.issueId,
});

ConnectedIssuesList.propTypes = {
  issues: PropTypes.shape({}).isRequired,
  repoId: PropTypes.number,
};

ConnectedIssuesList.defaultProps = {
  repoId: undefined,
};

export default connect(mapStateToProps)(ConnectedIssuesList);
