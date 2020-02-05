import initialState from 'stateData';
import actionConstants from 'actionConstants';

const {
  UPDATE_USER_TOKEN,
} = actionConstants;

export default (state = initialState.user, action = {}) => {
  switch (action.type) {
    case UPDATE_USER_TOKEN: {
      const { token } = action.payload;

      return {
        ...state,
        token,
      };
    }
    default: {
      return state;
    }
  }
};
