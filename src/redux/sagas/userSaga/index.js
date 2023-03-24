import { put, takeLatest, call } from "redux-saga/effects";
import { USER } from "~/redux/actionsType";
import { invoke } from "~/helpers/sagas";
import { userUpload } from "~/redux/api/userApis";
import {
	userUploadSubmit,
	userUpdateInfoSubmit
} from "~/redux/actions/userActions";
export default function* userSaga() {
	yield takeLatest(USER.USER_UPDATE.HANDLER, userUpdateSaga);
}
function* userUpdateSaga({ payload, type }) {
	const {
		showLoading = true,
		avatar,
		fullname,
		birthday,
		gender,
		address,
		callback = () => {},
		errorCb = () => {}
	} = payload || {};
	yield invoke(
		function* execution() {
			const urlAvatar = yield call(userUpload, avatar);
			console.log(">>> urlAvatar", urlAvatar);
		},
		null,
		showLoading,
		type,
		function* callbackError(err) {
			yield errorCb(err?.response);
		}
	);
}
