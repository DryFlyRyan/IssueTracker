import { all, put, race, take, takeLatest } from 'redux-saga/effects';
import actionConstants from 'actionConstants';
import actionCreators from 'actionCreators';

const {
  AUTHENTICATE_USER,
  FETCH_REPOS_FAILURE,
  FETCH_REPOS_SUCCESS,
  REPOS_PAGE,
} = actionConstants;

const {
  authenticateUserFailure,
  goToPage,
  fetchRepos,
  updateUserToken,
} = actionCreators;

export const authenticateUserSaga = function* authenticateUserSaga(action) {
  try {
    yield put(updateUserToken(action.payload));
    yield put(fetchRepos());

    const { failure } = yield race({
      failure: take(FETCH_REPOS_FAILURE),
      success: take(FETCH_REPOS_SUCCESS),
    });

    if (failure) throw failure;

    yield put(goToPage(REPOS_PAGE));
  } catch (error) {
    yield put(authenticateUserFailure(error));
  }
};

export default all([
  takeLatest(AUTHENTICATE_USER, authenticateUserSaga),
]);
