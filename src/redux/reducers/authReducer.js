import { AUTH } from "~/redux/actionsType";
import ApiUtils from "~/utils/apiUtils";
const initialState = {
	token: "",
	userInfo: {}
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case AUTH.SIGN_IN.SUCCESS: {
			ApiUtils.setAccessToken(action.payload.token);
			return {
				...state,
				token: action.payload.token,
				userInfo: action.payload.userInfo
			};
		}
		case AUTH.SIGN_OUT.HANDLER: {
			return {
				...state,
				token: "",
				userInfo: {}
			};
		}
		default:
			return state;
	}
};

export default authReducer;
