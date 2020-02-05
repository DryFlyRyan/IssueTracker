import actionConstants from 'actionConstants';

const {
  AUTHENTICATE_USER,
  AUTHENTICATE_USER_FAILURE,
  UPDATE_USER_TOKEN,
} = actionConstants;

export const authenticateUser = ({ token = '' }) => ({
  type: AUTHENTICATE_USER,
  payload: {
    token,
  },
});

export const authenticateUserFailure = (error) => ({
  type: AUTHENTICATE_USER_FAILURE,
  payload: {
    error,
  },
});

export const updateUserToken = ({ token = '' } = {}) => ({
  type: UPDATE_USER_TOKEN,
  payload: {
    token,
  },
});
