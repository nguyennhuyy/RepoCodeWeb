import { fork, all } from "redux-saga/effects";
import authSaga from "~/redux/sagas/authSaga";
import userSaga from "~/redux/sagas/userSaga";
import otherSaga from "~/redux/sagas/otherSaga";
import mediaSaga from "~/redux/sagas/mediaSaga";
export default function* rootSaga() {
	yield all([fork(authSaga), fork(userSaga), fork(otherSaga), fork(mediaSaga)]);
}
