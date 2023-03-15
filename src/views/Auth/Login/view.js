import { Button, TextField } from "@mui/material";
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
	FormSubmit,
	TextLink
} from "./styles";
import LoginSocial from "../LoginSocial/LoginSocial";
const LoginScreen = () => {
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
					<FormSubmit>
						<TextField
							label='Email'
							variant='outlined'
							sx={{
								width: "100%",
								marginBottom: "16px"
							}}
						/>
						<TextField
							label='Password'
							variant='outlined'
							sx={{
								width: "100%",
								marginBottom: "16px"
							}}
						/>
						<FormGroup>
							<FormControlLabel
								control={<Checkbox defaultChecked />}
								label='Remember'
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
							}}>
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
				</CardShadow>
			</BoxForm>
		</Container>
	);
};

export default LoginScreen;
