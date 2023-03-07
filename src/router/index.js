import { Route, Routes } from "react-router-dom";
import LayoutDefault from "~/layouts/default";
import Login from "~/views/Auth/Login";
import HomeScreen from "~/views/Home/views";
const RootRouter = () => {
	return (
		<Routes>
			<Route path='/' element={<LayoutDefault />}>
				<Route path='/' element={<HomeScreen />} />
				<Route path='login' element={<Login />} />
			</Route>
		</Routes>
	);
};

export default RootRouter;
