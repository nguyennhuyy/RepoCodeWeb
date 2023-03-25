import styled from "styled-components";
import { COLOR } from "~/utils/appConst";

export const HeaderQuestion = styled.section`
	background: linear-gradient(90deg, #86aed8, #c1b9db);
	padding-top: 42px;
	padding-bottom: 320px;
	text-align: center;
	position: relative;
	margin-bottom: -272px;
`;

export const BoxForm = styled.div({
	maxWidth: 700,
	width: "100%",
	paddingLeft: 15,
	paddingRight: 15,
	margin: "0 auto"
});
export const ItemForm = styled.div({
	boxShadow: `0 0 40px ${COLOR.RGB_5}`,
	display: "flex",
	flexDirection: "column",
	backgroundColor: COLOR.WHITE_0,
	position: "relative",
	zIndex: 3,
	marginBottom: 150,
	borderRadius: 10
});
export const FormData = styled.div({
	padding: "48px",
	display: "flex",
	flexDirection: "column",
	marginBottom: 24
});
