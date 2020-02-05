import actionConstants from 'actionConstants';

const {
  HOMEPAGE,
  REPOS_PAGE,
} = actionConstants;

export const routeMap = {
  [HOMEPAGE]: {
    path: '/',
  },
  [REPOS_PAGE]: {
    path: '/repos/:repoId?/:issueId?',
  },
};
