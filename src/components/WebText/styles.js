import styled from "styled-components";
import { COLOR } from "~/utils/appConst";

export const Text = styled.p(props => ({
	fontSize: props.fontSize || 14,
	fontWeight: props.fontWeight || 300,
	color: props.color || COLOR.BLACK_1,
	margin: props.margin || 16
}));
