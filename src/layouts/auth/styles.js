import styled from "styled-components";
import { COLOR } from "~/utils/appConst";
export const Wrapper = styled.div({
	width: "100%",
	maxWidth: "2048px",
	margin: "0 auto"
});
export const Header = styled.nav({
	height: "72px",
	padding: "0 2rem",
	display: "flex",
	alignItems: "center",
	position: "fixed",
	top: 0,
	left: 0,
	right: 0,
	backgroundColor: COLOR.WHITE_0,
	zIndex: 100,
	boxShadow: `0 0 40px ${COLOR.RGB_5}`
});
export const Left = styled.div({
	marginRight: "2rem",
	flex: 1,
	display: "flex",
	alignItems: "center"
});
export const BoxOutLet = styled.div({
	marginTop: 72
});
export const Footer = styled.div({
	display: "flex",
	alignItems: "center",
	flexDirection: "column",
	paddingTop: 32,
	paddingBottom: 32
});
export const BoxTopFoot = styled.div({
	display: "flex",
	justifyContent: "space-between",
	width: "100%",
	maxWidth: "75%"
});

export const ItemFootRight = styled.div({
	display: "flex",
	justifyContent: "space-between"
});
export const BoxItemLink = styled.div({
	display: "flex",
	alignItems: "center",
	flexDirection: "row",
	justifyContent: "center"
});
