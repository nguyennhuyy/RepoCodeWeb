import styled from "styled-components";
import { COLOR } from "~/utils/appConst";

export const ButtonSign = styled.div({
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
	padding: "8px 12px",
	borderRadius: 999,
	border: `1px solid ${COLOR.BLACK_1}`,
	width: "100%",
	maxWidth: 260,
	margin: "0 auto",
	marginBottom: 8,
	cursor: "pointer",
	":hover": {
		border: `1px solid ${COLOR.BLUE_0}`,
		p: {
			color: COLOR.BLUE_0
		}
	}
});
