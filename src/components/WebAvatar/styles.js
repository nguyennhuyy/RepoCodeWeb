import styled from "styled-components";

export const BoxAvatar = styled.div(props => ({
	height: 45,
	width: 45,
	backgroundColor: props.listColor[props.index],
	borderRadius: 24,
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	cursor: "pointer",
	userSelect: "none"
}));
