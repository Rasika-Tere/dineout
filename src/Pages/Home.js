import React from 'react';
import Container from '@material-ui/core/Container';
import PrimarySearchAppBar from '../Components/HomePage/PrimarysearchBar';
import Grid from '@material-ui/core/Grid';

import { BottomNavigation } from '@material-ui/core';
import HomeGrid from '../Components/HomePage/HomeGrid';

export default function Gallery() {
  return (
    <div className="App">

      <header className="App-header">
        {/* for top search bar */}
        <Grid item xs={12} lg={12}>
        <PrimarySearchAppBar />
        </Grid>
      </header>
      <React.Fragment>
        <Container fixed>
          <p>
            
            <HomeGrid/>

            {/* The bottom navigation with all the icons have been added in the footer in App.js. That is why it is apperaring on every page */}

          </p>
        </Container>
      </React.Fragment>
      <footer className="App-footer" position="sticky ">
        <BottomNavigation />
      </footer>
    </div>

  );
}