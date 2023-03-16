import { Button } from "@mui/material";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Language, Logo } from "~/assets/path";
import WebText from "~/components/WebText";
import { useActions } from "~/hooks/useActions";
import useSelectorShallow from "~/hooks/useSelectorShallow";
import { signOutSubmit } from "~/redux/actions/authActions";
import { getUserInfoSelector } from "~/redux/selectors/userSelector";
import { COLOR } from "~/utils/appConst";
import {
	Wrapper,
	Header,
	BoxOutLet,
	Left,
	Center,
	Right,
	BoxList,
	BoxItem,
	BoxAuth,
	BoxBottom,
	BoxLanguage,
	ItemBottom,
	ItemBottomTop,
	ItemLogo,
	ListBottom,
	ItemList,
	ItemCopyright
} from "./styles";
const LayoutHeader = () => {
	const infoUser = useSelectorShallow(getUserInfoSelector);
	const actions = useActions({
		signOutSubmit
	});
	const navigate = useNavigate();
	const logOutFunc = () => {
		actions.signOutSubmit();
		navigate("/login");
	};
	return (
		<Header>
			<Left>
				<Link to={"/"} style={{ display: "flex", alignItems: "center" }}>
					<Logo />
				</Link>
			</Left>
			<Center>
				<BoxList>
					<BoxItem>
						<WebText fontSize={16}>Remove Background</WebText>
					</BoxItem>
					<BoxItem>
						<WebText fontSize={16}>How to use</WebText>
					</BoxItem>
					<BoxItem>
						<WebText fontSize={16}>Tools & API</WebText>
					</BoxItem>
					<BoxItem>
						<WebText fontSize={16}>Pricing</WebText>
					</BoxItem>
				</BoxList>
			</Center>
			{!infoUser?.token ? (
				<Right>
					<BoxAuth>
						<WebText fontSize={16} fontWeight={400}>
							<Link to={"/login"}>Login</Link>
						</WebText>
					</BoxAuth>
					<BoxAuth activeBg>
						<WebText fontSize={16} fontWeight={400}>
							<Link to={"/register"}>Sign up</Link>
						</WebText>
					</BoxAuth>
				</Right>
			) : (
				<Button onClick={logOutFunc}>
					{/* <Link to={"/"}>Log Out</Link> */}
					<WebText>Log Out</WebText>
				</Button>
			)}
		</Header>
	);
};
const LayoutBottom = () => {
	return (
		<BoxBottom>
			<ItemBottom>
				<ItemBottomTop>
					<ItemLogo>
						<BoxLanguage>
							<Language />
							<WebText fontSize={18} margin={"0px 0px 0px 10px"}>
								English
							</WebText>
						</BoxLanguage>
					</ItemLogo>
					<ListBottom>
						<ItemList>
							<WebText color={COLOR.WHITE_0} fontSize={16}>
								Terms of Service
							</WebText>
						</ItemList>
						<ItemList>
							<WebText color={COLOR.WHITE_0} fontSize={16}>
								General Terms and Conditions
							</WebText>
						</ItemList>
						<ItemList>
							<WebText color={COLOR.WHITE_0} fontSize={16}>
								Privacy Policy
							</WebText>
						</ItemList>
						<ItemList>
							<WebText color={COLOR.WHITE_0} fontSize={16}>
								Cookies Policy
							</WebText>
						</ItemList>
						<ItemList>
							<WebText color={COLOR.WHITE_0} fontSize={16}>
								Imprint
							</WebText>
						</ItemList>
					</ListBottom>
				</ItemBottomTop>
				<ItemCopyright>
					<WebText margin={"50px 0px 0px 0px"} color={COLOR.WHITE_0}>
						Made with by Huy Dev
					</WebText>
					<WebText margin={"50px 0px 0px 0px"} color={COLOR.WHITE_0}>
						© Huy Dev 2023
					</WebText>
				</ItemCopyright>
			</ItemBottom>
		</BoxBottom>
	);
};
const LayoutDefault = () => {
	return (
		<Wrapper>
			<LayoutHeader />
			<BoxOutLet>
				<Outlet />
			</BoxOutLet>
			<LayoutBottom />
		</Wrapper>
	);
};

export default LayoutDefault;
