import { USER } from "~/redux/actionsType";

export const userUploadSubmit = payload => ({
	type: USER.USER_UPLOAD.HANDLER,
	payload
});

export const userUpdateInfoSubmit = payload => ({
	type: USER.USER_UPDATE.HANDLER,
	payload
});
