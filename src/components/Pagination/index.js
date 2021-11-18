import { Toolbar, Button, Typography } from "@mui/material/";
import PropTypes from "prop-types";

Pagination.propTypes = {
  page:PropTypes.number,
  handlePage: PropTypes.func
};

export function Pagination({page,handlePage}) {
  return (
    <Toolbar style={{ justifyContent: "center" }}>
      <Button sx={{ px: 2 },{fontSize: '20px'}}  variant="standard" color="inherit" onClick={() => handlePage(page - 1)}>
        Back
      </Button>
      <Typography component='h4' variant='h4'>
          {page}
      </Typography>
      <Button sx={{ px: 2 },{fontSize: '20px'}}  variant="standard" color="inherit" onClick={() => handlePage(page + 1)}>
        Next
      </Button>
    </Toolbar>
  );
}
