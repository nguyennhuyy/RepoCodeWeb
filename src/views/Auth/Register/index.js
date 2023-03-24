import { memo, useEffect, useState } from "react";
import { signUpSubmit } from "~/redux/actions/authActions";
import { useActions } from "~/hooks/useActions";
import RegisterScreen from "./view";
import { useNavigate } from "react-router-dom";

const DATA_ERROR = {
	USER_EXIST: "user-exists"
};
const RegisterView = () => {
	const navigate = useNavigate();
	const actions = useActions({
		signUpSubmit
	});
	const [dataError, setDataError] = useState();
	const [messageError, setMessageError] = useState();

	const handleRegister = data => {
		const { fullname, email, password } = data;
		let opt = {
			fullname,
			email,
			password,
			callback: data => {
				if (data) {
					navigate("/dashboard");
				}
			},
			errorCb: data => {
				setDataError(data.data);
			}
		};

		actions.signUpSubmit({ ...opt });
	};
	const handleError = () => {
		switch (dataError?.error ? dataError?.error : dataError) {
			case DATA_ERROR.USER_EXIST:
				setMessageError("User exists");
				break;
			default:
				setMessageError("");
				break;
		}
	};
	useEffect(() => {
		handleError();
	}, [dataError]);

	return (
		<RegisterScreen onLogin={handleRegister} messageError={messageError} />
	);
};

export default memo(RegisterView);
