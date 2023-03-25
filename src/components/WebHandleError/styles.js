import styled from "styled-components";
import { COLOR } from "~/utils/appConst";

export const BoxError = styled.div({
	position: "fixed",
	top: 0,
	zIndex: 999
});
export const ContainerErr = styled.div({
	maxWidth: 400,
	height: 90,
	borderRadius: 10,
	display: "flex",
	alignItems: "center"
});
