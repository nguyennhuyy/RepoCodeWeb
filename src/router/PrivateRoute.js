import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useSelectorShallow from "~/hooks/useSelectorShallow";
import { getTokenSelector } from "~/redux/selectors/userSelector";
const PrivateRoute = ({ component: Component, ...rest }) => {
	const token = useSelectorShallow(getTokenSelector);
	return token ? <Outlet /> : <Navigate to='/auth/login' />;
};

export default PrivateRoute;
