import React from 'react';
import { connect } from 'react-redux';

import AppWrapper from './AppWrapper';

const ConnectedAppWrapper = (props) => <AppWrapper {...props} />;

const mapStateToProps = ({ router }) => ({
  page: router.page,
});

export default connect(mapStateToProps)(ConnectedAppWrapper);
