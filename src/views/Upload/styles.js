import styled from "styled-components";
import { COLOR } from "~/utils/appConst";
export const Container = styled.div({
	width: "100%"
});
export const BoxUpload = styled.div({
	width: "30%",
	padding: "20px 0 64px 0",
	boxShadow: "0px 0px 56px rgba(69,69,69,.2)",
	borderRadius: 20,
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	flexDirection: "column",
	margin: "0 auto",
	marginTop: "50px",
	marginBottom: "50px"
});
export const BoxLogo = styled.div({
	marginTop: 48,
	marginBottom: 24
});
export const UrlUpload = styled.div({
	marginTop: 20,
	textAlign: "center"
});

export const BoxResultImage = styled.div({
	margin: "0 auto",
	maxWidth: 1140,
	padding: "0 15px"
});
export const ItemResult = styled.div({
	margin: "0 auto",
	maxWidth: 1140,
	padding: "0 15px",
	boxShadow: `0 0 3px ${COLOR.RGB_8}`,
	marginBottom: 50
});
export const TopResult = styled.div({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center"
});
export const HeaderLeft = styled.div({
	display: "flex"
});
export const ContentResult = styled.div({
	display: "flex"
});
export const IconCloseTop = styled.div({
	cursor: "pointer"
});
export const BoxImage = styled.div({
	flex: 3,
	display: "flex",
	justifyContent: "center",
	alignItems: "center"
});
export const ImageResult = styled.img(props => ({
	maxHeight: "50vh",
	width: "auto",
	height: "auto",
	verticalAlign: "middle",
	marginBottom: 50,
	...props.style
}));
export const DownloadItem = styled.div({
	cursor: "pointer",
	flex: 1
});
export const WrapperDownload = styled.div({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	flexDirection: "column"
});
