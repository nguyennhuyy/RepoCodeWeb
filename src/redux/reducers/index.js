import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "~/redux/reducers/authReducer";

const authPersitConfig = {
	key: "auth",
	storage: storage,
	whitelist: ["token", "userInfo"],
	blacklist: [""]
};
const rootReducer = combineReducers({
	auth: persistReducer(authPersitConfig, authReducer)
});

export default rootReducer;
