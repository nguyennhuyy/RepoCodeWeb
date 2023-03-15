import { memo } from "react";
import { signUpSubmit } from "~/redux/actions/authActions";
import { useActions } from "~/hooks/useActions";
import RegisterScreen from "./view";
import { useNavigate } from "react-router-dom";

const RegisterView = () => {
	const navigate = useNavigate();
	const actions = useActions({
		signUpSubmit
	});
	const handleRegister = data => {
		const { fullname, email, password } = data;
		let opt = {
			fullname,
			email,
			password,
			callback: data => {
				if (data) {
					navigate("/");
				}
			}
		};

		actions.signUpSubmit({ ...opt });
	};
	return <RegisterScreen onLogin={handleRegister} />;
};

export default memo(RegisterView);
