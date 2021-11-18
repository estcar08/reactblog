import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    paddingLeft: "40px",
    paddingRight: "40px",
    minHeight: "100vh",
  },
});

export function LayoutContainer({ children }) {
  const classes = useStyles();
  console.log(children);
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={4}>
        {children}
      </Grid>
    </Grid>
  );
}
