import styled from "styled-components";
import { COLOR } from "~/utils/appConst";
export const BoxError = styled.div({
	display: "flex",
	width: "100%",
	height: 40,
	borderRadius: 8,
	backgroundColor: COLOR.PINK_0,
	alignItems: "center",
	padding: "0 20px",
	marginBottom: 15,
	justifyContent: "space-between"
});
