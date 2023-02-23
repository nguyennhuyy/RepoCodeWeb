import { put, takeLatest, call } from "redux-saga/effects";
import { AUTH } from "~/redux/actionsType";
import { invoke } from "~/helpers/sagas";
import { signInSuccess } from "~/redux/actions/authActions";
import APIUtils from "~/utils/apiUtils";

export default function* infoSagas() {
	yield takeLatest(AUTH.SIGN_IN.HANDLER, signInSaga);
}

function* signInSaga({ payload, type }) {
	const { showLoading = true } = payload || {};
	yield invoke(
		function* execution() {
			// const result = yield call(signInApi, payload.userName, payload.password);
			// if (result.access_token && result.user_info) {
			// 	yield APIUtils.setAccessToken(result.access_token);
			// 	yield put(
			// 		signInSuccess({
			// 			userInfo: result.user_info,
			// 			token: result.access_token,
			// 			save: payload.save
			// 				? { username: payload.userName, password: payload.password }
			// 				: {}
			// 		})
			// 	);
			// }
		},
		null,
		showLoading,
		type
	);
}
