import { createGlobalStyle } from "styled-components";
import variables from "~/assets/css/root";
import fonts from "~/assets/fonts/fonts";

const GlobalStyle = createGlobalStyle`
  ${fonts};
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
    font-family: var(--font);
    font-weight: 400,
    font-size: 1.6rem
  }
`;

export default GlobalStyle;
