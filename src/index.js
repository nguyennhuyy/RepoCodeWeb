import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import configureStore from "~/redux/store/configureStore";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle, { theme } from "~/components/WebGlobalStyle";
import GlobalFonts from "~/assets/fonts/fonts";
import { ThemeProvider } from "@mui/material";
import ScrollToTop from "./helpers/scrollToTop";
const storeConfig = configureStore();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Provider store={storeConfig.store}>
		<PersistGate loading={null} persistor={storeConfig.persistor}>
			<BrowserRouter>
				<GlobalStyle />
				<GlobalFonts />
				<ThemeProvider theme={theme}>
					<ScrollToTop />
					<App />
				</ThemeProvider>
			</BrowserRouter>
		</PersistGate>
	</Provider>
);
