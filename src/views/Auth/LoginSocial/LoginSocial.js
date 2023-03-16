import { ButtonSign } from "./styles";
import { Facebook, Google } from "~/assets/path";
import WebText from "~/components/WebText";
import { provider, auth, providerFb } from "~/helpers/firebase";
import {
	FacebookAuthProvider,
	GoogleAuthProvider,
	signInWithPopup
} from "firebase/auth";
import {
	signInGoogleSubmit,
	signInFacebookSubmit
} from "~/redux/actions/authActions";
import { useActions } from "~/hooks/useActions";
import { useNavigate } from "react-router-dom";
import WebError from "~/components/WebError";
import { useEffect, useState } from "react";
const DATA_ERROR = {
	GOOGLE_LOGIN_FAILED: "google-login-failed",
	FACEBOOK_LOGIN_FAILED: "facebook-login-failed",
	SOCIAL_ACCOUNT_EXISTS: "account-exists-with-different-credential"
};
const LoginSocial = () => {
	const navigate = useNavigate();
	const actions = useActions({
		signInGoogleSubmit,
		signInFacebookSubmit
	});
	const [dataError, setDataError] = useState();
	const [messageError, setMessageError] = useState();
	const handleLoginGoogle = () => {
		signInWithPopup(auth, provider)
			.then(result => {
				const credential = GoogleAuthProvider.credentialFromResult(result);
				const token = credential.idToken;
				let opt = {
					token,
					callback: data => {
						if (data) {
							navigate("/");
						}
					},
					errorCb: data => {
						setDataError(data.data);
					}
				};
				actions.signInGoogleSubmit({
					...opt
				});
			})
			.catch(error => {
				console.log(">>> error", error);
				const errorMessage = error.message.split("/")[1].split(")")[0];
				setDataError(errorMessage);
			});
	};
	const handleLoginFacebook = () => {
		signInWithPopup(auth, providerFb)
			.then(result => {
				const credential = FacebookAuthProvider.credentialFromResult(result);
				const token = credential.accessToken;
				let opt = {
					token,
					callback: data => {
						if (data) {
							navigate("/");
						}
					},
					errorCb: data => {
						setDataError(data.data);
					}
				};
				actions.signInFacebookSubmit({
					...opt
				});
			})
			.catch(error => {
				const errorMessage = error.message.split("/")[1].split(")")[0];
				setDataError(errorMessage);
			});
	};
	const handleError = () => {
		switch (dataError?.error ? dataError?.error : dataError) {
			case DATA_ERROR.GOOGLE_LOGIN_FAILED:
				setMessageError("Login Google Failed");
				break;
			case DATA_ERROR.FACEBOOK_LOGIN_FAILED:
				setMessageError("Login Facebook Failed");
				break;
			case DATA_ERROR.SOCIAL_ACCOUNT_EXISTS:
				setMessageError("Login Social Failed");
			default:
				break;
		}
	};
	useEffect(() => {
		handleError();
	}, [dataError]);
	return (
		<>
			<WebError error={messageError} />
			<ButtonSign onClick={handleLoginFacebook}>
				<Facebook width='31px' height='31px' />
				<WebText color={"#000"} margin={"0 0 0 3px"} fontWeight={500}>
					Continue with Facebook
				</WebText>
			</ButtonSign>
			<ButtonSign onClick={handleLoginGoogle}>
				<Google width='31px' height='31px' />
				<WebText color={"#000"} margin={"0 0 0 3px"} fontWeight={500}>
					Continue with Google
				</WebText>
			</ButtonSign>
		</>
	);
};

export default LoginSocial;
