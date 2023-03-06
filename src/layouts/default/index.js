import { Outlet } from "react-router-dom";
import { Logo } from "~/assets/path";
import WebText from "~/components/WebText";
import {
	Wrapper,
	Header,
	Left,
	Center,
	Right,
	BoxList,
	BoxItem,
	BoxAuth
} from "./styles";
const LayoutDefault = () => {
	return (
		<Wrapper>
			<Header>
				<Left>
					<Logo />
				</Left>
				<Center>
					<BoxList>
						<BoxItem>
							<WebText fontSize={18}>Remove Background</WebText>
						</BoxItem>
						<BoxItem>
							<WebText fontSize={18}>How to use</WebText>
						</BoxItem>
						<BoxItem>
							<WebText fontSize={18}>Tools & API</WebText>
						</BoxItem>
						<BoxItem>
							<WebText fontSize={18}>Pricing</WebText>
						</BoxItem>
					</BoxList>
				</Center>
				<Right>
					<BoxAuth>
						<WebText fontSize={18} fontWeight={500}>
							Login
						</WebText>
					</BoxAuth>
					<BoxAuth activeBg>
						<WebText fontSize={18} fontWeight={500}>
							Sign up
						</WebText>
					</BoxAuth>
				</Right>
			</Header>
			<Outlet />
		</Wrapper>
	);
};

export default LayoutDefault;
