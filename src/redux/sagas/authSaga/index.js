import { put, takeLatest, call } from "redux-saga/effects";
import { AUTH } from "~/redux/actionsType";
import { invoke } from "~/helpers/sagas";
import {
	signInApi,
	signUpApi,
	signInFacebook,
	signInGoogle
} from "~/redux/api/authApis";
import {
	signInSuccess,
	signInSubmit,
	signOutSubmit
} from "~/redux/actions/authActions";
import APIUtils from "~/utils/apiUtils";
export default function* infoSagas() {
	yield takeLatest(AUTH.SIGN_IN.HANDLER, signInSaga);
	yield takeLatest(AUTH.SIGN_UP.HANDLER, signUpSaga);
	yield takeLatest(AUTH.SIGN_IN_FACEBOOK.HANDLER, signInFacebookSaga);
	yield takeLatest(AUTH.SIGN_IN_GOOGLE.HANDLER, signInGoogleSaga);
}
function* signInSaga({ payload, type }) {
	const {
		showLoading = true,
		email,
		password,
		remember,
		callback = () => {},
		errorCb = () => {}
	} = payload || {};
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
				yield callback(result);
			}
		},
		null,
		showLoading,
		type,
		function* callbackError(err) {
			yield errorCb(err.response);
		}
	);
}
function* signUpSaga({ payload, type }) {
	const {
		showLoading = true,
		fullname,
		email,
		password,
		callback = () => {},
		errorCb = () => {}
	} = payload || {};
	yield invoke(
		function* execution() {
			const result = yield call(signUpApi, fullname, email, password);
			if (result) {
				yield put(
					signInSubmit({
						email,
						password,
						remember: true
					})
				);
				yield callback(result);
			}
		},
		null,
		showLoading,
		type,
		function* callbackError(err) {
			yield errorCb(err.response);
		}
	);
}
function* signInFacebookSaga({ payload, type }) {
	const {
		showLoading = true,
		token,
		callback = () => {},
		errorCb = () => {}
	} = payload || {};
	yield invoke(
		function* execution() {
			const result = yield call(signInFacebook, token);
			if (result.token) {
				yield APIUtils.setAccessToken(result.token);
				yield put(
					signInSuccess({
						userInfo: result,
						token: result.token
					})
				);
				yield callback(result);
			}
		},
		null,
		showLoading,
		type,
		function* callbackError(err) {
			yield errorCb(err.response);
		}
	);
}
function* signInGoogleSaga({ payload, type }) {
	const {
		showLoading = true,
		token,
		callback = () => {},
		errorCb = () => {}
	} = payload || {};
	yield invoke(
		function* execution() {
			const result = yield call(signInGoogle, token);
			if (result.token) {
				yield APIUtils.setAccessToken(result.token);
				yield put(
					signInSuccess({
						userInfo: result,
						token: result.token
					})
				);
				yield callback(result);
			}
		},
		null,
		showLoading,
		type,
		function* callbackError(err) {
			yield errorCb(err.response);
		}
	);
}
