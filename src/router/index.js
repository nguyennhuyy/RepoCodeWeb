import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import LoginView from "~/views/Auth/Login";
export const router = createBrowserRouter([
	{
		path: "/",
		element: <LoginView />
	}
]);
