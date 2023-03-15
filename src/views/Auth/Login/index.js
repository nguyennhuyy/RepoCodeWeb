import { useNavigate } from "react-router-dom";
import { memo } from "react";
import { useActions } from "~/hooks/useActions";
import { signInSubmit } from "~/redux/actions/authActions";
import LoginScreen from "./view";

const LoginView = () => {
	const navigate = useNavigate();
	const actions = useActions({
		signInSubmit
	});
	const onSubmiLogin = data => {
		const opt = {
			email: data.email,
			password: data.password,
			remember: data.remember,
			callback: data => {
				if (data) {
					navigate("/");
				}
			}
		};
		actions.signInSubmit({ ...opt });
	};
	return <LoginScreen onLogin={onSubmiLogin} />;
};

export default memo(LoginView);
