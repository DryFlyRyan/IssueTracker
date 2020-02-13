import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import actionConstants from 'actionConstants';
import actionCreators from 'actionCreators';
import AppWrapper from './AppWrapper';

const { HOMEPAGE } = actionConstants;
const { goToPage } = actionCreators;

const ConnectedAppWrapper = (props) => {
  if (!props.repoCount && props.page !== HOMEPAGE) {
    props.goHome();
  }

  return <AppWrapper {...props} />;
};

ConnectedAppWrapper.propTypes = {
  repoCount: PropTypes.number.isRequired,
  page: PropTypes.string.isRequired,
  goHome: PropTypes.func.isRequired,
};

const mapStateToProps = ({ router, repos }) => ({
  page: router.page,
  repoCount: repos.length,
});

const mapDispatchToProps = (dispatch) => ({
  goHome: () => dispatch(goToPage(HOMEPAGE)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedAppWrapper);
