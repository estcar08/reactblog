import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { LayoutContainer } from '../components/LayoutContainer';
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { Button, Typography } from "@mui/material";
import { Link, useParams, useNavigate } from "react-router-dom";
import useStyles from "../stylesConfig";

const PostView = () => {
	const classes = useStyles();
	const history = useNavigate();
  let { id } = useParams();

  const [data, setData] = useState([]);

	const handleLogout = ()=>{
    localStorage.setItem("authorized", "0");
  }

  useEffect(() => {
    const asyncCallback = async () => {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
      setData(res.data);
    };

    asyncCallback();
  }, [setData,id]);

	const prevPage = () => {
    history(-1);
  };

  return (
    <div className={classes.backcover}>
      <NavBar>
        <Typography
          variant="h4"
					color="secondary"
          component={Link}
          to={"/posts"}
          sx={{ flexGrow: 1, fontFamily: "Roboto Condensed", textDecoration: 'none'}}
        >
          Post Blog
        </Typography>
        <Button component={Link} to={"/posts"} color="inherit">
          Posts
        </Button>
        <Button onClick={() => handleLogout()} component={Link} to={"/home"} color="inherit">Logout</Button>
      </NavBar>
      <LayoutContainer>
				<Typography align="center" variant="h2" component="h2">
          {data.title}
        </Typography>
				<Typography align="center" variant="h6" component="h2">
          {data.body}
        </Typography>
				<Button style={{ marginTop: '2rem', fontSize: '30px' }} color="inherit" onClick={() => prevPage()}>
          REteurn to previous page
        </Button>
      </LayoutContainer>
      <Footer />
    </div>
  );
};

export default PostView;
