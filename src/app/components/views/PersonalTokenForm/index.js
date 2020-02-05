import React from 'react';
import { connect } from 'react-redux';
import actionCreators from 'actionCreators';

import PersonalTokenForm from './PersonalTokenForm';

const {
  authenticateUser,
} = actionCreators;

const ConnectedPersonalTokenForm = (props) => <PersonalTokenForm {...props} />;

const mapStateToProps = ({ user }) => ({
  token: user.token,
});

const mapDispatchToProps = (dispatch) => ({
  submitPersonalToken: (token) => dispatch(authenticateUser({ token })),
});

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedPersonalTokenForm);
