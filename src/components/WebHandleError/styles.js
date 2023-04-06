import styled, { keyframes } from "styled-components";
import { COLOR } from "~/utils/appConst";

const translate = keyframes`
	0% {
    transform: translate(330px, 0);
	}
	10% {
    transform: translate(-15px, 0);
	}
	20% {
    transform: translate(-15px, 0);
	}
	90% {
    transform: translate(-15px, 0);
	}
	100% {
    transform: translate(330px, 0);
	}
`;
export const BoxError = styled.div`
	position: fixed;
	bottom: 35px;
	right: 20px;
	animation: ${translate} 4s linear forwards;
	z-index: 999;
	background-color: ${COLOR.WHITE_0};
	border-radius: 5px;
	overflow: hidden;
`;
export const ContainerErr = styled.div(props => ({
	maxWidth: 400,
	maxHeight: 120,
	height: "auto",
	display: "flex",
	alignItems: "flex-start",
	borderLeft: `5px solid ${!props.warning ? COLOR.GREEN_0 : COLOR.YELLOW_0}`,
	flexDirection: "column",
	boxShadow: `3px 3px 3px ${COLOR.RGB_7}`,
	padding: "16px 85px 16px 15px",
	position: "relative"
}));

export const BoxIconClose = styled.div({
	position: "absolute",
	top: 5,
	right: 10,
	cursor: "pointer"
});
