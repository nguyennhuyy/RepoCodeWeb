import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "~/redux/reducers/authReducer";
import loadingReducer from "~/redux/reducers/loadingReducer";

const authPersitConfig = {
	key: "auth",
	storage: storage,
	whitelist: ["token", "userInfo"],
	blacklist: [""]
};
const rootReducer = combineReducers({
	loading: loadingReducer,
	auth: persistReducer(authPersitConfig, authReducer)
});

export default rootReducer;
