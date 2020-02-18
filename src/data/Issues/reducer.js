/* eslint-disable prefer-object-spread */
import initialState from 'stateData';
import actionConstants from 'actionConstants';
import { issueOrderer } from 'utils';

const {
  COMMIT_ISSUES,
  COMMIT_REPOS,
} = actionConstants;

export default (state = initialState.issues, action = {}) => {
  switch (action.type) {
    case COMMIT_ISSUES: {
      const {
        issues,
        repoId,
      } = action.payload;

      if (!state[repoId].issueOrder.length) {
        const issueOrder = issues.map((issue) => {
          return issue.id;
        });

        return {
          ...state,
          [repoId]: {
            ...state[repoId],
            issueOrder,
            issues,
          },
        };
      }

      const newIssueSet = issueOrderer({
        issues,
        issueOrder: state[repoId].issueOrder,
      });

      return {
        ...state,
        [repoId]: newIssueSet,
      };
    }

    case COMMIT_REPOS: {
      const { repos } = action.payload;

      const seededIssues = repos.reduce((issuesMap, repo) => {
        if (!repo.has_issues) {
          return issuesMap;
        }

        issuesMap[repo.id] = {
          issueOrder: [],
          issues: [],
        };

        return issuesMap;
      }, {});

      // We don't merge with the previous state to avoid keeping repos that have been
      // deleted, renamed, moved, etc.
      return {
        ...seededIssues,
      };
    }
    default: {
      return state;
    }
  }
};
