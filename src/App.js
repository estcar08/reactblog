import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './views/Dashboard';
import PostsView from './views/PostsView';
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
	paper: {
		width: "100%",
		height: "100%",
		backgroundColor: 'grey'
	},
  palette: {
    mode: "light",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/home' exact element={<Dashboard/>} />
          <Route path='/posts' exact element={<PostsView/>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
