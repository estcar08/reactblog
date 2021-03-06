import React from "react";
import { useEffect, useState, useMemo } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import { GridLayoutContainer } from "../components/GridLayoutContainer";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { Pagination } from "../components/Pagination";
import { OutlinedCard } from "../components/Card";
import { Button, Typography } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useStyles from "../stylesConfig";

const PostsView = () => {
  const location = useLocation();
  const history = useNavigate();

  const [data, setData] = useState([]);

  const currentPage = useMemo(
    () => new URLSearchParams(location.search).get('page'),
    [location.search],
  );
  const changePage = (newPage) => {
    if (newPage > 10 || newPage === 0) return;

    history(`${location.pathname}?page=${newPage}`, { replace: true });
    console.log(`${location.pathname}?page=${newPage}`);
    setPage(newPage);
  };
  const [page, setPage] = useState(currentPage ? Number(currentPage) : 1);

  const handleLogout = ()=>{
    localStorage.setItem("authorized", "0");
  }

  useEffect(() => {
    const asyncCallback = async () => {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}`);
      setData(res.data);
    };

    asyncCallback();
  }, [setData,page]);

  const classes = useStyles();
  return (
    <div className={classes.backcover}>
      <NavBar>
        <Typography
          variant="h4"
          color="secondary"
          sx={{ flexGrow: 1, fontFamily: "Roboto Condensed", }}
        >
          Post Blog
        </Typography>
        <Button onClick={() => handleLogout()} component={Link} to={"/home"} color="inherit">Logout</Button>
      </NavBar>
      <GridLayoutContainer>
        {data.map((row, index) => (
          <Grid key={row.id} item xs={12} sm={6} md={4}>
            <OutlinedCard key={row.id} id={row.id} title={row.title} body={row.body} />
          </Grid>
        ))}
      </GridLayoutContainer>
      <Pagination
        page={page}
        handlePage={changePage}
      />
      <Footer />
    </div>
  );
};

export default PostsView;
