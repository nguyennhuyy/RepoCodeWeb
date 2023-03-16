import { ButtonSign } from "./styles";
import { Facebook, Google } from "~/assets/path";
import WebText from "~/components/WebText";
import { provider, auth, providerFb } from "~/helpers/firebase";
import {
	FacebookAuthProvider,
	GoogleAuthProvider,
	signInWithPopup
} from "firebase/auth";
const LoginSocial = () => {
	const handleLoginGoogle = () => {
		signInWithPopup(auth, provider)
			.then(result => {
				console.log(">>>> result", result);
				const credential = GoogleAuthProvider.credentialFromResult(result);
				const token = credential.accessToken;
				const user = result.user;
			})
			.catch(error => {});
	};
	const handleLoginFacebook = () => {
		signInWithPopup(auth, providerFb)
			.then(result => {
				console.log(">>>> result", result);
				const user = result.user;
				const credential = FacebookAuthProvider.credentialFromResult(result);
				const accessToken = credential.accessToken;
			})
			.catch(error => {
				console.log(error);
			});
	};
	return (
		<>
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
