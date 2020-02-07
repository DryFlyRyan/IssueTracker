import { all, put, select, takeLatest } from 'redux-saga/effects';
import actionConstants from 'actionConstants';
import actionCreators from 'actionCreators';
import api from './api';

const {
  FETCH_ISSUES,
} = actionConstants;

const {
  commitIssues,
  fetchIssuesFailure,
  fetchIssuesSuccess,
} = actionCreators;

export const fetchIssuesSaga = function* fetchIssuesSaga(action) {
  try {
    const { repoId: targetRepoId } = action.payload;
    const repos = yield select((state) => state.repos);
    const { token } = yield select((state) => state.user);
    const targetRepo = repos.find((repo) => repo.id === targetRepoId);

    if (!targetRepo) {
      throw new Error(`No Repo found with id: ${targetRepoId}`);
    }

    const issues = yield api.getRepoIssues({
      fullName: targetRepo.full_name,
      token,
    });

    yield put(commitIssues({ repoId: targetRepoId, issues }));
    yield put(fetchIssuesSuccess());
  } catch (error) {
    yield put(fetchIssuesFailure(error));
  }
};

export default all([
  takeLatest(FETCH_ISSUES, fetchIssuesSaga),
]);
