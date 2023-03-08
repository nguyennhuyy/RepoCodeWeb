import { createMuiTheme } from "@mui/material";
import { createGlobalStyle } from "styled-components";
import variables from "~/assets/css/root";

export const theme = createMuiTheme({
	typography: {
		fontFamily: ["Poppins", "sans-serif"].join(",")
	}
});

const GlobalStyle = createGlobalStyle`
  ${variables};
  html {
    box-sizing: border-box;
    font-size: "62.5%"
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    color: var(--black);
    font-family: "Poppins, sans-serif";
    font-weight: 400,
    font-size: 1.6rem
  }
`;

export default GlobalStyle;
