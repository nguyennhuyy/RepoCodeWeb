import { Route, Routes } from "react-router-dom";
import LayoutAuth from "~/layouts/auth";
import LayoutDefault from "~/layouts/default";
import Login from "~/views/Auth/Login";
import HomeScreen from "~/views/Home/views";
const RootRouter = () => {
	return (
		<Routes>
			<Route path='/' element={<LayoutDefault />}>
				<Route path='/' element={<HomeScreen />} />
			</Route>
			<Route path='/' element={<LayoutAuth />}>
				<Route path='login' element={<Login />} />
			</Route>
			<Route path='*' element={<HomeScreen />} />
		</Routes>
	);
};

export default RootRouter;
