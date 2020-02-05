import * as repo from 'data/Repos/actions';
import * as router from 'data/Router/actions';
import * as user from 'data/User/actions';

export default {
  ...repo,
  ...router,
  ...user,
};
