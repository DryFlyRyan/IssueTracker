/* eslint-disable no-console */

import initialState from 'stateData';
// import { isDev } from 'utils/envDetector';

export default (state = initialState.error, action) => {
  if (
    // isDev()
    action.payload
    && action.payload.error
  ) {
    console.error(action.payload.error);
  }

  return state;
};
