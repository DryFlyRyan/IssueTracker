import { all } from 'redux-saga/effects';
import repos from 'data/Repos/sagas';
import user from 'data/User/sagas';

export default function* rootSaga() {
  yield all([
    repos,
    user,
  ]);
}
