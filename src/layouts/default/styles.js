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
	alignItems: "center"
});
export const Left = styled.div({
	marginRight: "2rem",
	flex: 1
});

export const Center = styled.div({
	flex: 4,
	display: "flex"
});
export const BoxList = styled.div({
	flex: 1,
	padding: "24px 0",
	width: "max-content",
	display: "flex",
	flexDirection: "row"
});
export const BoxItem = styled.div({
	marginRight: 20,
	cursor: "pointer"
});
export const Right = styled.div({
	flex: 1,
	display: "flex",
	cursor: "pointer"
});
export const BoxAuth = styled.div(props => ({
	padding: "20px 24px",
	width: "max-content",
	height: 27,
	display: "flex",
	alignItems: "center",
	backgroundColor: props.activeBg && COLOR.GRAY_1,
	justifyContent: "center",
	borderRadius: 999,
	cursor: "pointer"
}));
