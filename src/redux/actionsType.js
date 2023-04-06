export const asyncTypes = action => ({
	ORIGIN: action,
	HANDLER: `${action}_HANDLER`,
	START: `${action}_START`,
	SUCCESS: `${action}_SUCCESS`,
	FAILURE: `${action}_FAILURE`,
	ERROR: `${action}_ERROR`
});
export const LOADING = {
	FETCH: {
		FETCHING: "LOADING/FETCH_FETCHING",
		NON_FETCHING: "LOADING/FETCH_NON_FETCHING"
	},
	DIALOG: {
		SHOW: "LOADING/DIALOG_SHOW",
		HIDE: "LOADING/DIALOG_HIDE"
	}
};
export const AUTH = {
	SIGN_IN: asyncTypes("AUTH/SIGN_IN"),
	SIGN_UP: asyncTypes("AUTH/SIGN_UP"),
	FORGOT_PASS: asyncTypes("AUTH/FORGOT_PASS"),
	GET_USER_INFO: asyncTypes("AUTH/GET_USER_INFO"),
	SET_TOKEN: asyncTypes("AUTH/SET_TOKEN"),
	SIGN_OUT: asyncTypes("AUTH/SIGN_OUT"),
	SYNC_TOKEN_FCM: asyncTypes("SYNC_TOKEN_FCM"),
	SIGN_IN_FACEBOOK: asyncTypes("SIGN_IN_FACEBOOK"),
	SIGN_IN_GOOGLE: asyncTypes("SIGN_IN_GOOGLE"),
	SIGN_IN_UPDATE: asyncTypes("SIGN_IN_UPDATE")
};
export const USER = {
	USER_UPLOAD: asyncTypes("USER_UPLOAD"),
	USER_UPDATE: asyncTypes("USER_UPDATE")
};

export const ERROR = {
	ERROR_DISPATCH: asyncTypes("ERROR_ERROR_DISPATCH")
};
export const OTHER = {
	OTHER_SUPPORT: asyncTypes("OTHER_SUPPORT")
};
export const MEDIA = {
	MEDIA_REMOVE_BG: asyncTypes("MEDIA_REMOVE_BG")
};
