import actionConstants from 'actionConstants';

const {
  COMMIT_REPOS,
  FETCH_REPOS,
  FETCH_REPOS_FAILURE,
  FETCH_REPOS_SUCCESS,
} = actionConstants;

export const commitRepos = ({ repos }) => ({
  type: COMMIT_REPOS,
  payload: {
    repos,
  },
});

export const fetchRepos = () => ({
  type: FETCH_REPOS,
});

export const fetchReposFailure = (error) => ({
  type: FETCH_REPOS_FAILURE,
  payload: {
    error,
  },
});

export const fetchReposSuccess = () => ({
  type: FETCH_REPOS_SUCCESS,
});
