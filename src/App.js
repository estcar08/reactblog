import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingView from "./views/LandingView";
import LoginView from "./views/LoginView";
import PostsView from "./views/PostsView";
import PostView from "./views/PostView";
import NotFoundView from "./views/NotFoundView";
import { PrivateRoute } from "./components/PrivateRoute";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  paper: {
    width: "100%",
    height: "100%",
    backgroundColor: "grey",
  },
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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/home" exact element={<LandingView />} />
          <Route path="/login" exact element={<LoginView />} />
          <Route exact path="/posts" element={<PrivateRoute />}>
            <Route exact path="/posts" element={<PostsView />} />
          </Route>
          <Route exact path="/posts/:id" element={<PrivateRoute />}>
            <Route exact path="/posts/:id" element={<PostView />} />
          </Route>
          <Route path='*' exact  element={<NotFoundView />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
