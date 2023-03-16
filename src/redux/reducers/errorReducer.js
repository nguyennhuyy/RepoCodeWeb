import { ERROR } from "~/redux/actionsType";

const initialState = {
	errorText: "",
	errorStatus: ""
};

const errorReducer = (state = initialState, action) => {
	switch (action.type) {
		case ERROR.ERROR_DISPATCH.HANDLER:
			return {
				...state,
				errorText: action.payload.data,
				errorStatus: action.payload.status
			};
		default:
			return state;
	}
};

export default errorReducer;
