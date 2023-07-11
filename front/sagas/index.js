import { all, fork } from "redux-saga/effects";

import postSage from "./post";
import userSaga from "./user";

export default function* rootSaga() {
  yield all([fork(userSaga), fork(postSage)]);
}
