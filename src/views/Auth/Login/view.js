import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import WebHeading from "~/components/WebHeading";
import WebText from "~/components/WebText";
import { COLOR } from "~/utils/appConst";
import {
	Container,
	BoxTop,
	BoxForm,
	CardShadow,
	DivOr,
	ItemOr,
	FormSubmit
} from "./styles";
import LoginSocial from "../LoginSocial/LoginSocial";
import { Formik } from "formik";
import { LOGIN_FORM_SCHEME } from "~/helpers/validate";
import WebInput from "~/components/WebInput";
import WebError from "~/components/WebError";
const LoginScreen = ({ onLogin, messageError }) => {
	return (
		<Container>
			<BoxTop>
				<WebHeading
					fontSize={40}
					fontWeight={600}
					textAlign={"center"}
					margin={"0 0 0 0"}>
					Login with your Account
				</WebHeading>
				<WebText textAlign={"center"} fontSize={16} margin={"0 0 16px 0"}>
					or create a
					<Link to='/register' style={{ color: COLOR.BLUE_0, margin: "0 3px" }}>
						new account
					</Link>
					for free
				</WebText>
			</BoxTop>
			<BoxForm>
				<CardShadow>
					<WebHeading
						fontSize={26}
						textAlign={"center"}
						fontWeight={500}
						margin={"0 0 20px 0"}>
						Login
					</WebHeading>
					<LoginSocial />
					<DivOr>
						<ItemOr></ItemOr>
						<WebText margin={"0 10px 0 10px"} fontSize={16}>
							or
						</WebText>
						<ItemOr></ItemOr>
					</DivOr>
					<WebError error={messageError} />

					<Formik
						initialValues={{
							email: "",
							password: "",
							remember: true
						}}
						validationSchema={LOGIN_FORM_SCHEME}
						onSubmit={onLogin}>
						{({ values, handleChange, handleSubmit, errors, touched }) => (
							<FormSubmit>
								<WebInput
									label={"Email"}
									type={"email"}
									styles={{
										width: "100%",
										marginBottom: "16px"
									}}
									value={values.email}
									onChange={handleChange("email")}
									touched={touched.email}
									messageError={errors.email}
								/>
								<WebInput
									label={"Password"}
									styles={{
										width: "100%",
										marginBottom: "16px"
									}}
									type={"password"}
									value={values.password}
									touched={touched.password}
									onChange={handleChange("password")}
									messageError={errors.password}
								/>

								<FormGroup>
									<FormControlLabel
										control={
											<Checkbox
												defaultChecked
												onChange={handleChange("remember")}
											/>
										}
										label='Remember'
										value={values.remember}
									/>
								</FormGroup>
								<Button
									variant='contained'
									sx={{
										width: "max-content",
										margin: "0 auto",
										padding: "12px 48px",
										fontFamily: "Poppins, sans-serif",
										borderRadius: 999,
										fontWeight: 600,
										textTransform: "none",
										fontSize: "20px"
									}}
									onClick={handleSubmit}>
									Login
								</Button>
								<WebText textAlign={"center"}>
									This form is protected by hCaptcha and its
									<Link to={"/"} style={{ fontWeight: 500 }}>
										{" "}
										Privacy Policy{" "}
									</Link>{" "}
									and
									<Link to={"/"} style={{ fontWeight: 500 }}>
										{" "}
										Terms of Service{" "}
									</Link>{" "}
									apply.
								</WebText>
							</FormSubmit>
						)}
					</Formik>
				</CardShadow>
			</BoxForm>
		</Container>
	);
};

export default LoginScreen;
