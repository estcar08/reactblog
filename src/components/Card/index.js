import React from "react";
import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material//Typography";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    minWidth: 200,
  },
});

OutlinedCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  body: PropTypes.string
};

export function OutlinedCard(props) {
  const classes = useStyles();
  const {
    id,
    title,
    body
  } = props;
  return (
    <Card style={{backgroundColor: 'rgba(255, 255, 255, 0.8)'}} key={id} className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" component="p">
          {body.substring(0, 100).concat("...")}
        </Typography>
      </CardContent>
      <CardActions>
        <Button  component={Link} to={`/posts/${id}`}  size="small">Read</Button>
      </CardActions>
    </Card>
  );
}
