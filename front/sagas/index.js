import axios from 'axios';
import { all, fork } from 'redux-saga/effects';

import postSage from './post';
import userSaga from './user';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;
axios.defaults.withCredentials = true;

export default function* rootSaga() {
  yield all([fork(userSaga), fork(postSage)]);
}
