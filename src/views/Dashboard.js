import React from 'react';
import { LayoutContainer } from '../components/LayoutContainer';
import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';
import { Box, Button, Typography } from '@mui/material';
import { Link, useLocation,useHistory } from 'react-router-dom';


const Dashboard = () => {
  return (
    <div>
      <NavBar>
        <Typography variant="h4" component={Link} to={'/home'} sx={{ flexGrow: 1 }}>
          Post Blog
        </Typography>
        <Button component={Link} to={'/posts'} color="inherit">Posts</Button>
        <Button color="inherit">Logout</Button>
      </NavBar>
      <LayoutContainer>
        <Typography align="center" component='h1' variant='h1' color="primary">
            Welcome To My Blog
        </Typography>
      </LayoutContainer>
      <Footer/>
    </div>
  );
};

export default Dashboard;
