import { AUTH } from "~/redux/actionsType";
const initialState = {
	token: "",
	userInfo: {},
	cache: {}
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case AUTH.SIGN_IN.SUCCESS: {
			return {
				...state,
				token: action.payload.token,
				userInfo: action.payload.userInfo,
				cache: action.payload.save
			};
		}
		case AUTH.SIGN_OUT.SUCCESS: {
			return {
				...state,
				token: "",
				userInfo: {
					email: "",
					firstname: "",
					lastname: "",
					phonenumber: "",
					staffid: ""
				}
			};
		}
		default:
			return state;
	}
};

export default authReducer;
