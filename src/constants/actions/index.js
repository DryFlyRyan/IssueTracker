import * as Issues from 'constants/actions/Issues';
import * as Repos from 'constants/actions/Repos';
import * as Routes from 'constants/actions/Routes';
import * as User from 'constants/actions/User';

export default {
  ...Issues,
  ...Repos,
  ...Routes,
  ...User,
};
