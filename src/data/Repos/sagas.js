import { all, put, select, takeLatest } from 'redux-saga/effects';
import actionConstants from 'actionConstants';
import actionCreators from 'actionCreators';

import api from './api';

const {
  FETCH_REPOS,
} = actionConstants;

const {
  commitRepos,
  fetchReposFailure,
  fetchReposSuccess,
} = actionCreators;

export const fetchReposSaga = function* fetchReposSaga() {
  try {
    const { token } = yield select((state) => state.user);
    const repos = yield api.getUserRepos({ token });
    yield put(commitRepos({ repos }));
    yield put(fetchReposSuccess());
  } catch (error) {
    yield put(fetchReposFailure(error));
  }
};

export default all([
  takeLatest(FETCH_REPOS, fetchReposSaga),
]);
