import { put, takeLatest, call } from "redux-saga/effects";
import { invoke } from "~/helpers/sagas";
import { MEDIA } from "~/redux/actionsType";

import { mediaUpload, removeBg } from "~/redux/api/mediaApis";
export default function* mediaSaga() {
	yield takeLatest(MEDIA.MEDIA_REMOVE_BG.HANDLER, removeBackgroundSaga);
}
function* removeBackgroundSaga({ payload, type }) {
	const {
		showLoading = true,
		data,
		callback = () => {},
		errorCb = () => {}
	} = payload || {};
	yield invoke(
		function* execution() {
			let urlImage;
			if (typeof data !== "string") {
				urlImage = yield call(mediaUpload, data);
			}
			const result = yield call(removeBg, urlImage.image);
			yield callback({
				result: result,
				origin: urlImage.image
			});
		},
		null,
		showLoading,
		type,
		function* callbackError(err) {
			yield errorCb(err?.response);
		}
	);
}
