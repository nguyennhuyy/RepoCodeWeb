import { Button } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import { Language, Logo } from "~/assets/path";
import WebText from "~/components/WebText";
import { COLOR } from "~/utils/appConst";
import {
	Wrapper,
	Header,
	Left,
	BoxOutLet,
	Footer,
	BoxTopFoot,
	ItemFootRight,
	BoxItemLink
} from "./styles";
const LayoutHeader = () => {
	return (
		<Header>
			<Left>
				<Logo />
			</Left>
		</Header>
	);
};
const LayoutFooter = () => {
	const LIST_LINK = [
		{
			link: "/",
			title: "remove.bg",
			space: "|"
		},
		{
			link: "/unscreen",
			title: "unscreen",
			space: "|"
		},
		{
			link: "/designify",
			title: "designify",
			space: "|"
		},
		{
			link: "/cookie-policy",
			title: "Cookie Policy",
			space: "|"
		},
		{
			link: "/imprint",
			title: "Imprint",
			space: "| "
		},
		{
			link: "/privacy-policy",
			title: "Privacy Policy",
			space: " "
		}
	];
	return (
		<Footer>
			<BoxTopFoot>
				<Button
					sx={{
						color: COLOR.BLACK_1,
						textTransform: "none",
						fontWeight: 600,
						borderRadius: "20%",
						fontFamily: "Poppins, sans-serif"
					}}>
					Need help?
				</Button>
				<ItemFootRight>
					{LIST_LINK.map((item, index) => (
						<BoxItemLink key={index}>
							<WebText margin={"0"} fontSize={12}>
								<Link to={item.link}>{item.title}</Link>
							</WebText>
							<WebText margin={"0 3px 0 3px"} fontSize={12}>
								{item.space}
							</WebText>
						</BoxItemLink>
					))}
				</ItemFootRight>
			</BoxTopFoot>
			<WebText color={COLOR.GRAY_3} textAlign={"center"} margin={"0 auto"}>
				Copyright 2023 Kaleido AI GmbH - All rights reserved.
			</WebText>
		</Footer>
	);
};
const LayoutAuth = () => {
	return (
		<Wrapper>
			<LayoutHeader />
			<BoxOutLet>
				<Outlet />
			</BoxOutLet>
			<LayoutFooter />
		</Wrapper>
	);
};

export default LayoutAuth;
