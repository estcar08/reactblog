import { createTheme } from "@mui/material/styles";
import back from "./assets/img/myblog.jpg";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#373737",
    },
    secondary: {
      main: "#fafafa",
    },
  },
  typography: {
    fontFamily: `"Roboto", "Roboto Condensed", "Helvetica", "Arial", sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});

export default theme;
