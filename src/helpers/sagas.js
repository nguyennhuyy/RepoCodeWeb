import { put, select } from "redux-saga/effects";
import { signOutSubmit } from "~/redux/actions/authActions";
import {
	onFetching,
	nonFetching,
	hideLoading,
	showLoading
} from "~/redux/actions/loadingActions";
export function* invoke(execution, handleError, showDialog, actionType) {
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
		if (showDialog) {
			yield put(hideLoading(actionType));
		}

		// const token = yield select(getUserTokenSelector);
		// if (error && error.error_code === -1) {
		// 	//   //exp token
		// 	if (token) {
		// 		yield put(signOutSubmit());
		// 	}
		// 	return;
		// }

		if (typeof handleError === "function") {
			yield handleError(error);
		} else {
		}
	}
}
