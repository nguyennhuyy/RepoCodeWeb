import styled from "styled-components";
import { COLOR } from "~/utils/appConst";
export const Container = styled.div({
  width: "100%",
});
export const BoxTop = styled.div({
  paddingTop: 48,
  paddingBottom: 48,
});
export const BoxForm = styled.div({
  maxWidth: 480,
  margin: "0 auto",
  width: "100%",
});
export const CardShadow = styled.div({
  boxShadow: `0 0 40px ${COLOR.RGB_5}`,
  width: "100%",
  height: "auto",
  borderRadius: 5,
  padding: 20,
  paddingTop: 10,
});

export const FormSubmit = styled.div({
  display: "flex",
  width: "100%",
  flexDirection: "column",
});
