import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import LandingView from "./views/LandingView";
import LoginView from "./views/LoginView";
import PostsView from "./views/PostsView";
import PostView from "./views/PostView";
import NotFoundView from "./views/NotFoundView";
import { PrivateRoute } from "./components/PrivateRoute";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./themeConfig";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
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
