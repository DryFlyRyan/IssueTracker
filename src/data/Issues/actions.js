import actionConstants from 'actionConstants';

const {
  COMMIT_ISSUES,
  UPDATE_ISSUE_ORDER,
  FETCH_ISSUES,
  FETCH_ISSUES_FAILURE,
  FETCH_ISSUES_SUCCESS,
} = actionConstants;

export const commitIssues = ({ repoId, issues }) => ({
  type: COMMIT_ISSUES,
  payload: {
    repoId,
    issues,
  },
});

export const updateIssueOrder = ({ repoId, issueOrder }) => ({
  type: UPDATE_ISSUE_ORDER,
  payload: {
    repoId,
    issueOrder,
  },
});

export const fetchIssues = ({ repoId }) => ({
  type: FETCH_ISSUES,
  payload: {
    repoId,
  },
});

export const fetchIssuesFailure = (error) => ({
  type: FETCH_ISSUES_FAILURE,
  payload: {
    error,
  },
});

export const fetchIssuesSuccess = () => ({
  type: FETCH_ISSUES_SUCCESS,
});
