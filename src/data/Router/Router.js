import initialState from 'stateData/';
import { routeMap } from './Routes';

export default (state = initialState.router, action = {}) => {
  if (!routeMap[action.type]) {
    return state;
  }

  return {
    page: action.type,
    payload: {
      ...action.payload,
    },
  };
};
