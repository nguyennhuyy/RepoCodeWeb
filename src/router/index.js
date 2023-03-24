import { Route, Routes, Navigate } from "react-router-dom";
import LayoutAuth from "~/layouts/auth";
import LayoutDefault from "~/layouts/default";
import Login from "~/views/Auth/Login";
import Register from "~/views/Auth/Register";
import HomeScreen from "~/views/Home/views";
import UserView from "~/views/User";
import PrivateRoute from "./PrivateRoute";

import useSelectorShallow from "~/hooks/useSelectorShallow";
import { getTokenSelector } from "~/redux/selectors/userSelector";
const RootRouter = () => {
	const token = useSelectorShallow(getTokenSelector);
	return (
		<Routes>
			<Route path='/' element={<LayoutDefault />}>
				<Route path='/' element={<PrivateRoute />}>
					<Route path='/:id' element={<UserView />} />
				</Route>
				<Route path='/dashboard' element={<HomeScreen />} />
			</Route>
			<Route path='/' element={<LayoutDefault />}>
				<Route path='*' element={<HomeScreen />} />
			</Route>
			<Route path='/auth' element={<LayoutAuth />}>
				<Route
					path='login'
					element={token ? <Navigate to={"/dashboard"} /> : <Login />}
				/>
				<Route
					path='register'
					element={token ? <Navigate to={"/dashboard"} /> : <Register />}
				/>
			</Route>
		</Routes>
	);
};

export default RootRouter;
