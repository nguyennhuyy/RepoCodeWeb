import { AUTH } from "~/redux/actionsType";

export const signInSubmit = payload => ({
	type: AUTH.SIGN_IN.HANDLER,
	payload
});

export const signInSuccess = payload => ({
	type: AUTH.SIGN_IN.SUCCESS,
	payload
});
export const signInGoogleSubmit = payload => ({
	type: AUTH.SIGN_IN_GOOGLE.HANDLER,
	payload
});
export const signInFacebookSubmit = payload => ({
	type: AUTH.SIGN_IN_FACEBOOK.HANDLER,
	payload
});
export const signUpSubmit = payload => ({
	type: AUTH.SIGN_UP.HANDLER,
	payload
});

export const signUpSuccess = payload => ({
	type: AUTH.SIGN_UP.SUCCESS,
	payload
});

export const forgotPassSubmit = payload => ({
	type: AUTH.FORGOT_PASS.HANDLER,
	payload
});

export const forgotPassSuccess = payload => ({
	type: AUTH.FORGOT_PASS.SUCCESS,
	payload
});

export const getUserInfoSubmit = payload => ({
	type: AUTH.GET_USER_INFO.HANDLER,
	payload
});

export const getUserInfoSuccess = payload => ({
	type: AUTH.GET_USER_INFO.SUCCESS,
	payload
});

export const signOutSubmit = payload => ({
	type: AUTH.SIGN_OUT.HANDLER,
	payload
});
