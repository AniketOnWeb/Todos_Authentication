import ReactDOM from "react-dom";
import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./utils/theme";
import GlobalStyles from "./utils/global";

import App from "./App";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <>
      <App />
      <GlobalStyles />
      {/* it is neat way to inject global.js styles this way */}
    </>
  </ThemeProvider>,
  document.getElementById("root")
);
