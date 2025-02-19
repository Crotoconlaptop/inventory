import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ff4081",
    },
    secondary: {
      main: "#00e5ff",
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
    text: {
      primary: "#ffffff",
      secondary: "#b0bec5",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h4: {
      fontSize: "1.8rem",
      "@media (max-width:600px)": {
        fontSize: "1.5rem",
      },
    },
  },
});

export default darkTheme;
