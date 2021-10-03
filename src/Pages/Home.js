
// this is the home page

import React from 'react';
import Container from '@material-ui/core/Container';
import PrimarySearchAppBar from '../Components/HomePage/PrimarysearchBar';
import Grid from '@material-ui/core/Grid';
import HomeGrid from '../Components/HomePage/HomeGrid';
import SimpleBottomNavigation from '../Components/HomePage/SimpleBottomNavigation';

export default function Gallery() {
  return (
    <div className="App">

      <header className="App-header">
        {/* added top search bar */}
        <Grid item xs={12} md={12} lg={12}>
          <PrimarySearchAppBar />
        </Grid>
      </header>


      <React.Fragment>
        <Container fixed>
          <p>
            {/* This component grid has all the other components of the page in grids */}
            <HomeGrid />
          </p>
        </Container>
      </React.Fragment>


      {/* added bottom navigation */}
      <footer className="App-footer" position="sticky ">
        <SimpleBottomNavigation />
      </footer>
    </div>

  );
}