import { Outlet } from "react-router-dom";
const LayoutDefault = () => {
	return (
		<div>
			<h1>Header</h1>
			<Outlet />
		</div>
	);
};

export default LayoutDefault;
