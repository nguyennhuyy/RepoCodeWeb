import { takeLatest, call } from "redux-saga/effects";
import { OTHER } from "~/redux/actionsType";
import { invoke } from "~/helpers/sagas";
import { contactSupportApi } from "~/redux/api/otherApis";
export default function* otherSaga() {
	yield takeLatest(OTHER.OTHER_SUPPORT.HANDLER, otherSupportSaga);
}
function* otherSupportSaga({ payload, type }) {
	const {
		showLoading = true,
		email,
		subject,
		message,
		callback = () => {},
		errorCb = () => {}
	} = payload || {};
	yield invoke(
		function* execution() {
			const result = yield call(contactSupportApi, email, subject, message);
			yield callback(result);
		},
		null,
		showLoading,
		type,
		function* callbackError(err) {
			yield errorCb(err?.response);
		}
	);
}
