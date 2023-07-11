import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import {
  EDIT_NICKNAME_FAILURE,
  EDIT_NICKNAME_REQUEST,
  EDIT_NICKNAME_SUCCESS,
  FOLLOW_FAILURE,
  FOLLOW_REQUEST,
  FOLLOW_SUCCESS,
  LOAD_MY_INFO_FAILURE,
  LOAD_MY_INFO_REQUEST,
  LOAD_MY_INFO_SUCCESS,
  UNFOLLOWER_FAILURE,
  UNFOLLOWER_REQUEST,
  UNFOLLOWER_SUCCESS,
  UNFOLLOW_FAILURE,
  UNFOLLOW_REQUEST,
  UNFOLLOW_SUCCESS,
} from '../reducers/user';
import * as api from '../apis';

// 내 정보 가져오기
function* loadMyInfo() {
  try {
    const res = yield call(api.myInfo);
    yield put({
      type: LOAD_MY_INFO_SUCCESS,
      data: res?.data,
    });
  } catch (error) {
    yield put({
      type: LOAD_MY_INFO_FAILURE,
      error: error.response.data,
    });
  }
}

// 닉네임 변경
function* editNickname(action) {
  try {
    const res = yield call(api.nicknameEdit, action.data);
    yield put({
      type: EDIT_NICKNAME_SUCCESS,
      data: res.data,
    });
  } catch (error) {
    yield put({
      type: EDIT_NICKNAME_FAILURE,
      error: error.response.data,
    });
  }
}

// 팔로우
function* addFollowing(action) {
  try {
    const res = yield call(api.addFollowing, action.data);
    yield put({
      type: FOLLOW_SUCCESS,
      data: res.data,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: FOLLOW_FAILURE,
      error: error.response.data,
    });
  }
}

// 팔로잉 취소
function* unFollowing(action) {
  try {
    const res = yield call(api.removeFollowing, action.data);
    yield put({
      type: UNFOLLOW_SUCCESS,
      data: res.data,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: UNFOLLOW_FAILURE,
      error: error.response.data,
    });
  }
}

// 팔로워 취소
function* unFollower(action) {
  try {
    const res = yield call(api.removeFollower, action.data);
    yield put({
      type: UNFOLLOWER_SUCCESS,
      data: res.data,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: UNFOLLOWER_FAILURE,
      error: error.response.data,
    });
  }
}

function* watchLoadMyInfo() {
  yield takeLatest(LOAD_MY_INFO_REQUEST, loadMyInfo);
}

function* watchNickname() {
  yield takeLatest(EDIT_NICKNAME_REQUEST, editNickname);
}

function* watchAddFollowing() {
  yield takeLatest(FOLLOW_REQUEST, addFollowing);
}

function* watchUnFollowing() {
  yield takeLatest(UNFOLLOW_REQUEST, unFollowing);
}

function* watchUnFollowers() {
  yield takeLatest(UNFOLLOWER_REQUEST, unFollower);
}

export default function* userSaga() {
  yield all([
    fork(watchLoadMyInfo),
    fork(watchNickname),
    fork(watchAddFollowing),
    fork(watchUnFollowing),
    fork(watchUnFollowers),
  ]);
}
