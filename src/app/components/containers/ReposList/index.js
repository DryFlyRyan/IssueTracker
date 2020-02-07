import React from 'react';
import { connect } from 'react-redux';

import ReposList from './ReposList';

const ConnectedReposList = (props) => <ReposList {...props} />;

const mapStateToProps = ({ repos }) => ({
  repos,
});

export default connect(mapStateToProps)(ConnectedReposList);
