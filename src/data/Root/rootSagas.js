import { all } from 'redux-saga/effects';
import issues from 'data/Issues/sagas';
import repos from 'data/Repos/sagas';
import user from 'data/User/sagas';

export default function* rootSaga() {
  yield all([
    issues,
    repos,
    user,
  ]);
}
