import { memo } from "react";
import { useActions } from "~/hooks/useActions";
import { signInSubmit } from "~/redux/actions/authActions";
import LoginScreen from "./view";

const LoginView = () => {
	const actions = useActions({
		signInSubmit
	});
	const onSubmiLogin = data => {
		const opt = {
			username: data.username,
			password: data.password
		};
		console.log(">>> data login", data);
		actions.signInSubmit({ ...opt });
	};
	return <LoginScreen onLogin={onSubmiLogin} />;
};

export default memo(LoginView);
