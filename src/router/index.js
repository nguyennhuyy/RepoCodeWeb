import { Route, Routes } from "react-router-dom";
import LayoutDefault from "~/layouts/default";
import Login from "~/views/Auth/Login";
const RootRouter = () => {
	return (
		<Routes>
			<Route path='/' element={<LayoutDefault />}>
				<Route path='login' element={<Login />} />
			</Route>
		</Routes>
	);
};

export default RootRouter;
