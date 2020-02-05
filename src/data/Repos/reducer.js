import initialState from 'stateData';
import actionConstants from 'actionConstants';

const {
  COMMIT_REPOS,
} = actionConstants;

export default (state = initialState.repos, action = {}) => {
  switch (action.type) {
    case COMMIT_REPOS: {
      return { ...action.payload.repos };
    }
    default: {
      return state;
    }
  }
};
