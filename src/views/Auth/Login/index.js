import { useNavigate } from "react-router-dom";
import { memo, useEffect, useState } from "react";
import { useActions } from "~/hooks/useActions";
import { signInSubmit } from "~/redux/actions/authActions";
import LoginScreen from "./view";
const DATA_ERROR = {
	USER_NOT_FOUND: "user-not-found",
	USER_INCORRECT_PASS: "user-incorrect-password"
};
const LoginView = () => {
	const navigate = useNavigate();
	const actions = useActions({
		signInSubmit
	});
	const [dataError, setDataError] = useState();
	const [messageError, setMessageError] = useState();
	const onSubmiLogin = data => {
		const opt = {
			email: data.email,
			password: data.password,
			remember: data.remember,
			callback: data => {
				if (data) {
					navigate("/");
				}
			},
			errorCb: data => {
				setDataError(data.data);
			}
		};
		actions.signInSubmit({ ...opt });
	};
	const handleError = () => {
		switch (dataError?.error ? dataError?.error : dataError) {
			case DATA_ERROR.USER_NOT_FOUND:
				setMessageError("User not found");
				break;
			case DATA_ERROR.USER_INCORRECT_PASS:
				setMessageError("User incorrect password");
				break;
			default:
				setMessageError("");
				break;
		}
	};
	useEffect(() => {
		handleError();
	}, [dataError]);
	return <LoginScreen onLogin={onSubmiLogin} messageError={messageError} />;
};

export default memo(LoginView);
