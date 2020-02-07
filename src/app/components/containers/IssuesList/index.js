import React from 'react';
import { connect } from 'react-redux';

import IssuesList from './IssuesList';

const ConnectedIssuesList = (props) => <IssuesList {...props} />;

const mapStateToProps = ({ issues }) => ({
  issues,
});

export default connect(mapStateToProps)(ConnectedIssuesList);
