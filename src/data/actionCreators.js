import * as issues from 'data/Issues/actions';
import * as repo from 'data/Repos/actions';
import * as router from 'data/Router/actions';
import * as user from 'data/User/actions';

export default {
  ...issues,
  ...repo,
  ...router,
  ...user,
};
