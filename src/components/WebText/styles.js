import styled from "styled-components";

export const Text = styled.p(props => ({
	fontSize: props.fontSize || 14,
	fontWeight: props.fontWeight || 400
}));
