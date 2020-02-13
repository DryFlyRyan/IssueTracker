import repos from './_mocks/repos.mock';

const token = process.env.NODE_ENV === 'development'
  ? (process.env.API_KEY || '')
  : '';


export default {
  error: {},
  router: {
    page: '/',
  },
  user: {
    token,
  },
  repos: [],
  issues: {},
};
