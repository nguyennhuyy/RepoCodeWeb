import { OTHER } from "~/redux/actionsType";

export const otherSupportSubmit = payload => ({
	type: OTHER.OTHER_SUPPORT.HANDLER,
	payload
});

export const showToastSubmit = payload => ({
	type: OTHER.SHOW_TOAST.HANDLER,
	payload
});

export const isToastOpenSubmit = payload => ({
	type: OTHER.IS_TOAST_OPEN.HANDLER,
	payload
});

export const isToastCloseSubmit = payload => ({
	type: OTHER.IS_TOAST_CLOSE.HANDLER,
	payload
});
