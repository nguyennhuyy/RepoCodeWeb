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
	flex: 1,
	display: "flex",
	alignItems: "center"
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
	cursor: "pointer",
	alignItems: "center"
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

export const BoxBottom = styled.div({
	backgroundColor: COLOR.GRAY_2,
	margin: "auto",
	width: "100%"
});
export const BoxLanguage = styled.button({
	backgroundColor: COLOR.WHITE_0,
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	border: "none",
	outline: "none",
	borderRadius: 9999,
	padding: "10px 24px",
	cursor: "pointer"
});
export const ItemBottom = styled.div({
	backgroundColor: COLOR.GRAY_2,
	padding: "4rem 0",
	maxWidth: "80rem",
	margin: "auto"
});
export const ItemBottomTop = styled.div({
	display: "flex",
	justifyContent: "space-between"
});
export const ItemLogo = styled.div({
	display: "flex",
	alignItems: "center"
});

export const ListBottom = styled.div({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center"
});

export const ItemList = styled.div({
	marginRight: 24,
	width: "max-content",
	cursor: "pointer"
});
export const ItemCopyright = styled.div({
	display: "flex",
	justifyContent: "space-between"
});
