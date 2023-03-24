import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useSelectorShallow from "~/hooks/useSelectorShallow";
import { getUserInfoSelector } from "~/redux/selectors/userSelector";
const PrivateRoute = ({ component: Component, ...rest }) => {
	const infoUser = useSelectorShallow(getUserInfoSelector);
	return infoUser.token ? <Outlet /> : <Navigate to='/auth/login' />;
};

export default PrivateRoute;
