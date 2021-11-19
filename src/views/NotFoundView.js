import { Link } from "react-router-dom";
import { LayoutContainer } from "../components/LayoutContainer";
import { Typography } from "@mui/material";
import useStyles from "../stylesConfig";

const NotFoundView = () => {
  const classes = useStyles();
  return (
    <div style={{minHeight: "100vh"}} className={classes.backcover}>
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
