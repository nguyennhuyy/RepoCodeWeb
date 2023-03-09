import styled from "styled-components";

export const HomeWrapper = styled.div({
	height: "100%"
});
export const Banner = styled.div({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	height: "calc(100vh - 72px)"
});
export const BoxBanner = styled.div({
	width: "80%",
	height: "100%",
	padding: "24px 32px",
	display: "flex",
	justifyContent: "space-between"
});
export const BannerLeft = styled.div({
	flex: 1
});
export const Image = styled.img({
	width: 420,
	height: 280,
	objectFit: "cover"
});
export const BoxSubTitle = styled.div({
	display: "flex",
	alignItems: "center"
});
export const ItemBrush = styled.div({
	position: "relative"
});
export const PositionText = styled.div({
	position: "absolute",
	top: -10,
	left: 0,
	zIndex: 10
});

export const BannerRight = styled.div({
	flex: 1,
	marginTop: 100
});
export const BoxUpload = styled.div({
	width: "90%",
	padding: "144px 0 64px 0",
	boxShadow: "0px 0px 56px rgba(69,69,69,.2)",
	borderRadius: 20,
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	flexDirection: "column"
});
export const UrlUpload = styled.div({
	marginTop: 20,
	textAlign: "center"
});

export const WrapperStunning = styled.div({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	width: "100%",
	padding: "96px 0",
	flexDirection: "column"
});

export const ListButton = styled.div({
	display: "flex"
});

export const BoxSwiper = styled.div({
	width: "80%",
	margin: "0 auto",
	display: "flex",
	justifyContent: "center",
	marginTop: "24px",
	borderRadius: 30,
	overflow: "hidden"
});
export const ImageSwiper = styled.img({
	width: "100%",
	height: "100%",
	objectFit: "contain"
});
export const DescStunning = styled.div({
	paddingTop: 150,
	display: "flex",
	justifyContent: "center",
	alignItems: "center"
});
export const BoxDesc = styled.div({
	width: "80%",
	height: "100%",
	display: "flex",
	flexDirection: "row"
});
export const DescLeft = styled.div({
	flex: 1
});
export const DescRight = styled.div({
	flex: 1
});
export const ImageDesc = styled.img({
	width: "456px",
	height: "345px",
	objectFit: "contain"
});
export const WrapperPicture = styled.div({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	width: "100%",
	padding: "96px 0",
	flexDirection: "column"
});

export const ListPicture = styled.div({
	display: "grid",
	gridTemplateColumns: "1fr 1fr 1fr 1fr",
	width: "80%",
	margin: "0 auto",
	justifyContent: "center",
	marginTop: "24px",
	flexDirection: "row",
	columnGap: 20
});

export const PictureItem = styled.div({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	flexDirection: "column"
});
export const ImagePictureItem = styled.img({
	maxWidth: "100%",
	height: "auto",
	borderRadius: 16
});
