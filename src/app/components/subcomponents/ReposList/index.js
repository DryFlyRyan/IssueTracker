import React from 'react';
import { connect } from 'react-redux';

import ReposList from './ReposList';

const ConnectedReposList = (props) => <ReposList {...props} />;

const mapStateToProps = ({ repos }) => ({
  repos,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedReposList);
