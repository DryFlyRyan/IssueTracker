import React from 'react';
import { connect } from 'react-redux';

import MainView from './MainView';

const ConnectedMainView = (props) => <MainView {...props} />;

const mapStateToProps = ({ location }) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedMainView);
