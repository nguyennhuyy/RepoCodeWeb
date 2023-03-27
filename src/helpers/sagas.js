import { put } from "redux-saga/effects";
import { signOutSubmit } from "~/redux/actions/authActions";
import {
	onFetching,
	nonFetching,
	hideLoading,
	showLoading
} from "~/redux/actions/loadingActions";
export function* invoke(
	execution,
	handleError,
	showDialog,
	actionType,
	callbackError
) {
	try {
		if (showDialog) {
			yield put(showLoading(actionType));
		}
		yield put(onFetching(actionType));
		yield* execution();
		yield put(nonFetching(actionType));
		if (showDialog) {
			yield put(hideLoading(actionType));
		}
	} catch (error) {
		console.info(`Saga Invoke Error [${actionType}]>>>>>`, error);
		yield put(nonFetching(actionType));
		if (error?.response?.status === 401) {
			yield put(signOutSubmit(actionType));
		}
		if (callbackError) {
			yield* callbackError(error);
		}
		if (showDialog) {
			yield put(hideLoading(actionType));
		}

		if (typeof handleError === "function") {
			yield handleError(error);
		} else {
		}
	}
}
