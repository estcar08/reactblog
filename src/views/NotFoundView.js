import { Link } from "react-router-dom";
import { LayoutContainer } from "../components/LayoutContainer";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import back from "../assets/img/myblog.jpg";

const useStyles = makeStyles({
  paperContainer: {
    backgroundImage: `url(${back})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundPosition: "center center",
    minHeight: "100vh"
  },
});

const NotFoundView = () => {
  const classes = useStyles();
  return (
    <div className={classes.paperContainer}>
      <LayoutContainer>
        <div>
          <Typography
          sx={{
            fontFamily: "Roboto Condensed",
            fontSize: '60px'
          }}
          align="center"
          component="h1"
          variant="h1"
          color="secondary"
        >
         404 - Not Found!
        </Typography>
          <Link  style={{
            fontFamily: "Roboto Condensed",
            fontSize: '40px'
          }} to="/posts">Go to posts</Link>
        </div>
      </LayoutContainer>
    </div>
  );
};

export default NotFoundView;
