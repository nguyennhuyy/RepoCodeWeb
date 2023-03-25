import { put, takeLatest, call } from "redux-saga/effects";
import { USER } from "~/redux/actionsType";
import { invoke } from "~/helpers/sagas";
import { userUpload, userUpdateInfo } from "~/redux/api/userApis";
export default function* otherSaga() {
	yield takeLatest(USER.USER_UPDATE.HANDLER, otherSupportSaga);
}
function* otherSupportSaga({ payload, type }) {
	const {
		showLoading = true,
		callback = () => {},
		errorCb = () => {}
	} = payload || {};
	yield invoke(
		function* execution() {},
		null,
		showLoading,
		type,
		function* callbackError(err) {
			yield errorCb(err?.response);
		}
	);
}
