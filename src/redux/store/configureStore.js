import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from "redux-persist";
import rootSaga from "~/redux/sagas";
import rootReducer from "~/redux/reducers";
import storage from "redux-persist/lib/storage";

const persistConfig = {
	key: "root",
	storage: storage,
	whitelist: []
};
const bindMiddleware = middleware => applyMiddleware(...middleware);
const persistedReducer = persistReducer(persistConfig, rootReducer);

function configureStore() {
	const middlewares = [];
	const sagaMiddleware = createSagaMiddleware();
	middlewares.push(sagaMiddleware);
	let store;
	store = createStore(persistedReducer, bindMiddleware(middlewares));
	const persistor = persistStore(store);
	store.sagaTask = sagaMiddleware.run(rootSaga);
	const state = store.getState();
	return { store, persistor, state };
}

export default configureStore;
