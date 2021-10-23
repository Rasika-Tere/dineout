
// this is the final book page

import React from 'react';
import Container from '@material-ui/core/Container';
import PrimarySearchAppBar from '../Components/HomePage/PrimarysearchBar';

import { Paper } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';




export default function Gallery() {
  return (
      
    <React.Fragment>
      <Container fixed>
        <p>
        <Grid container spacing={0}>
        <Grid item xs={12} md={12}>
        <Paper variant="outlined"> 
   <img src="https://static.trip101.com/main_pics/206085/medium.jpg" width="855" height="600"/>
  
  
</Paper> 
</Grid>
</Grid>
        </p>
      </Container>
    </React.Fragment>
  );
}