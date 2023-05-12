import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "~/redux/reducers/authReducer";
import loadingReducer from "~/redux/reducers/loadingReducer";
import errorReducer from "~/redux/reducers/errorReducer";
import otherReducer from "~/redux/reducers/otherReducer";

const authPersitConfig = {
	key: "auth",
	storage: storage,
	whitelist: ["token", "userInfo"],
	blacklist: [""]
};
const rootReducer = combineReducers({
	error: errorReducer,
	loading: loadingReducer,
	auth: persistReducer(authPersitConfig, authReducer),
	other: otherReducer
});

export default rootReducer;
