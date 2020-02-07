import initialState from 'stateData';
import actionConstants from 'actionConstants';

const {
  COMMIT_ISSUES,
} = actionConstants;

export default (state = initialState.issues, action = {}) => {
  switch (action.type) {
    case COMMIT_ISSUES: {
      const {
        issues,
        repoId,
      } = action.payload;

      return {
        ...state,
        [repoId]: {
          updated: new Date(),
          issues,
        },
      };
    }
    default: {
      return state;
    }
  }
};
