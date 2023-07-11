import { all, call, fork, put, takeLatest, throttle } from 'redux-saga/effects';
import {
  ADD_COMMENT_FAILURE,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  ADD_POST_FAILURE,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  LIKE_FAILURE,
  LIKE_REQUEST,
  LIKE_SUCCESS,
  LOAD_HASHTAG_POSTS_FAILURE,
  LOAD_HASHTAG_POSTS_REQUEST,
  LOAD_HASHTAG_POSTS_SUCCESS,
  LOAD_POSTS_FAILURE,
  LOAD_POSTS_REQUEST,
  LOAD_POSTS_SUCCESS,
  LOAD_POST_FAILURE,
  LOAD_POST_REQUEST,
  LOAD_POST_SUCCESS,
  LOAD_USER_POSTS_FAILURE,
  LOAD_USER_POSTS_REQUEST,
  LOAD_USER_POSTS_SUCCESS,
  REMOVE_POST_FAILURE,
  REMOVE_POST_REQUEST,
  REMOVE_POST_SUCCESS,
  RETWEET_FAILURE,
  RETWEET_REQUEST,
  RETWEET_SUCCESS,
  UNLIKE_FAILURE,
  UNLIKE_REQUEST,
  UNLIKE_SUCCESS,
  UPDATE_POST_FAILURE,
  UPDATE_POST_REQUEST,
  UPDATE_POST_SUCCESS,
  UPLOAD_IMAGES_FAILURE,
  UPLOAD_IMAGES_REQUEST,
  UPLOAD_IMAGES_SUCCESS,
} from '../reducers/post';
import * as api from '../apis';
import { ADD_POST_TO_ME, REMOVE_POST_OF_ME } from '../reducers/user';

// 게시글 가져오기
function* loadPosts(action) {
  try {
    const res = yield call(api.posts, action.lastId);
    yield put({
      type: LOAD_POSTS_SUCCESS,
      data: res.data,
    });
  } catch (err) {
    yield put({
      type: LOAD_POSTS_FAILURE,
      error: err?.response?.data,
    });
  }
}

// 게시글 생성하기
function* addPost(action) {
  try {
    const res = yield call(api.addPost, action.data);
    yield put({
      type: ADD_POST_SUCCESS,
      data: res.data,
    });
    yield put({
      type: ADD_POST_TO_ME,
      data: res?.data?.id,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: ADD_POST_FAILURE,
      error: error.response.data,
    });
  }
}

// 게시글 삭제하기
function* removePost(action) {
  try {
    const res = yield call(api.removePost, action.data);
    yield put({
      type: REMOVE_POST_SUCCESS,
      data: res.data,
    });
    yield put({
      type: REMOVE_POST_OF_ME,
      data: action.data,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: REMOVE_POST_FAILURE,
      error: error.response.data,
    });
  }
}

// 게시글 수정
function* updatePost(action) {
  try {
    const res = yield call(api.updatePost, action.data);
    yield put({
      type: UPDATE_POST_SUCCESS,
      data: res.data,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: UPDATE_POST_FAILURE,
      error: error.response.data,
    });
  }
}

// 해시태그
function* hashtagPost(action) {
  try {
    const res = yield call(api.hashtag, action.data, action.lastId);
    yield put({
      type: LOAD_HASHTAG_POSTS_SUCCESS,
      data: res.data,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: LOAD_HASHTAG_POSTS_FAILURE,
      error: error.response.data,
    });
  }
}

// 선택 유저 게시글 가져오기
function* userPosts(action) {
  try {
    const res = yield call(api.userPost, action.data, action.lastId);
    yield put({
      type: LOAD_USER_POSTS_SUCCESS,
      data: res.data,
    });
  } catch (err) {
    yield put({
      type: LOAD_USER_POSTS_FAILURE,
      error: err?.response?.data,
    });
  }
}

// 게시글 하나
function* singlePost(action) {
  try {
    const res = yield call(api.singlePost, action.data);
    yield put({
      type: LOAD_POST_SUCCESS,
      data: res.data,
    });
  } catch (err) {
    yield put({
      type: LOAD_POST_FAILURE,
      error: err?.response?.data,
    });
  }
}

// 이미지 업로드
function* uploadImages(action) {
  try {
    const res = yield call(api.uploadImage, action.data);
    yield put({
      type: UPLOAD_IMAGES_SUCCESS,
      data: res.data,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: UPLOAD_IMAGES_FAILURE,
      error: error.response.data,
    });
  }
}

// 좋아요
function* onLike(action) {
  try {
    const res = yield call(api.like, action.data);
    yield put({
      type: LIKE_SUCCESS,
      data: res.data,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: LIKE_FAILURE,
      error: error.response.data,
    });
  }
}

// 좋아요 취소
function* onUnLike(action) {
  try {
    const res = yield call(api.unLike, action.data);
    yield put({
      type: UNLIKE_SUCCESS,
      data: res.data,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: UNLIKE_FAILURE,
      error: error.response.data,
    });
  }
}

// 댓글 생성
function* comment(action) {
  try {
    const res = yield call(api.comment, action.data);
    yield put({
      type: ADD_COMMENT_SUCCESS,
      data: res.data,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: ADD_COMMENT_FAILURE,
      error: error.response.data,
    });
  }
}

// 리트윗
function* retweet(action) {
  try {
    const res = yield call(api.retweet, action.data);
    yield put({
      type: RETWEET_SUCCESS,
      data: res.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: RETWEET_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLoadPosts() {
  yield throttle(5000, LOAD_POSTS_REQUEST, loadPosts);
}

function* watchHashtagPost() {
  yield throttle(5000, LOAD_HASHTAG_POSTS_REQUEST, hashtagPost);
}

function* watchLoadUserPosts() {
  yield throttle(5000, LOAD_USER_POSTS_REQUEST, userPosts);
}

function* watchSinglePost() {
  yield takeLatest(LOAD_POST_REQUEST, singlePost);
}

function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, addPost);
}

function* watchRemovePost() {
  yield takeLatest(REMOVE_POST_REQUEST, removePost);
}

function* watchUpdatePost() {
  yield takeLatest(UPDATE_POST_REQUEST, updatePost);
}

function* watchUploadImages() {
  yield takeLatest(UPLOAD_IMAGES_REQUEST, uploadImages);
}

function* watchLike() {
  yield takeLatest(LIKE_REQUEST, onLike);
}

function* watchUnLike() {
  yield takeLatest(UNLIKE_REQUEST, onUnLike);
}

function* watchComment() {
  yield takeLatest(ADD_COMMENT_REQUEST, comment);
}

function* watchRetweet() {
  yield takeLatest(RETWEET_REQUEST, retweet);
}

export default function* postSage() {
  yield all([
    fork(watchLoadPosts),
    fork(watchAddPost),
    fork(watchRemovePost),
    fork(watchSinglePost),
    fork(watchUploadImages),
    fork(watchLike),
    fork(watchUnLike),
    fork(watchComment),
    fork(watchUpdatePost),
    fork(watchHashtagPost),
    fork(watchRetweet),
    fork(watchLoadUserPosts),
  ]);
}
