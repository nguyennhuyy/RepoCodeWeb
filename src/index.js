import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import configureStore from "~/redux/store/configureStore";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";
const storeConfig = configureStore();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Provider store={storeConfig.store}>
			<PersistGate loading={null} persistor={storeConfig.persistor}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</PersistGate>
		</Provider>
	</React.StrictMode>
);
