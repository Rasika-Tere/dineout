
// this is the home page

import React from 'react';
import Container from '@material-ui/core/Container';
import PrimarySearchAppBar from '../Components/HomePage/PrimarysearchBar';
import HomeGrid from '../Components/HomePage/HomeGrid';
import SimpleBottomNavigation from '../Components/HomePage/SimpleBottomNavigation';
import Hidden from '@material-ui/core/Hidden';
import Tabs from '../Components/HomePage/Tabs';




export default function Gallery() {
  return (
    <div className="App">

      <header className="App-header">
        {/* added top search bar */}
        <Hidden mdUp>
          <PrimarySearchAppBar />
        </Hidden>

        <Hidden mdDown>
        <Tabs/>
        </Hidden>
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