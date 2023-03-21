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
	zIndex: 100
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
export const ItemAvatar = styled.div({
	position: "relative"
});

export const BoxModalInfo = styled.div({
	display: "flex",
	flexDirection: "column",
	width: 260,
	padding: 24,
	position: "absolute",
	top: "100%",
	right: "60%",
	zIndex: 999,
	backgroundColor: COLOR.WHITE_0,
	boxShadow: `0 0 40px ${COLOR.RGB_5}`,
	borderRadius: 16
});

export const ImageAvatar = styled.img({
	width: 45,
	height: 45,
	borderRadius: 99,
	objectFit: "cover",
	cursor: "pointer"
});
