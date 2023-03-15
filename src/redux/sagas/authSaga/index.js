import { put, takeLatest, call } from "redux-saga/effects";
import { AUTH } from "~/redux/actionsType";
import { invoke } from "~/helpers/sagas";
import { signInApi } from "~/redux/api/authApis";
import { signInSuccess } from "~/redux/actions/authActions";
import APIUtils from "~/utils/apiUtils";
export default function* infoSagas() {
	yield takeLatest(AUTH.SIGN_IN.HANDLER, signInSaga);
}
function* signInSaga({ payload, type }) {
	const { showLoading = true, email, password, remember } = payload || {};
	yield invoke(
		function* execution() {
			const result = yield call(signInApi, email, password, remember);
			if (result.token) {
				yield APIUtils.setAccessToken(result.token);
				yield put(
					signInSuccess({
						userInfo: result,
						token: result.token
					})
				);
			}
		},
		null,
		showLoading,
		type
	);
}
