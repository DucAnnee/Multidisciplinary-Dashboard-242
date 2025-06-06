import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import { RouterProvider } from "react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "@fontsource/be-vietnam-pro/300.css";
import "@fontsource/be-vietnam-pro/400.css";
import "@fontsource/be-vietnam-pro/500.css";
import "@fontsource/be-vietnam-pro/700.css";

import router from "./routers/router.jsx";

const theme = createTheme({
  palette: {
    background: {
      default: "#E3F0E5",
    },
    primary: {
      main: "#08A045",
      light: "#ABD1B5",
      dark: "#073B3A",
    },
    secondary: {
      main: "#596869",
      light: "#ABD1B5",
    },
    controller: {
      on: "#b6e7ec",
      off: "#df7c41",
    },
  },
  typography: {
    fontFamily: "Be Vietnam Pro",
  },
  components: {
    MuiPaper: {
      defaultProps: {
        elevation: 8,
      },
    },
  },
});
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </StyledEngineProvider>
  </StrictMode>,
);
