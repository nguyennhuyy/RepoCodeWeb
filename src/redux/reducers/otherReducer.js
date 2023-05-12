import { OTHER } from "~/redux/actionsType";

const initialState = {
	showToast: "",
	isToast: false
};

const otherReducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case OTHER.SHOW_TOAST.HANDLER:
			return {
				...state,
				showToast: {
					type: payload.type,
					title: payload.title
				}
			};
		case OTHER.IS_TOAST_OPEN.HANDLER:
			return {
				...state,
				isToast: true
			};
		case OTHER.IS_TOAST_CLOSE.HANDLER:
			return {
				...state,
				isToast: false
			};
		default:
			return state;
	}
};

export default otherReducer;
