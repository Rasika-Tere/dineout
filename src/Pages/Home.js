
// this is the home page

import React from 'react';
import Container from '@material-ui/core/Container';
import HomeGrid from '../Components/HomePage/HomeGrid';
import SimpleBottomNavigation from '../Components/HomePage/SimpleBottomNavigation';
import PrimarySearchAppBar from '../Components/HomePage/PrimarysearchBar';
import TopBar from '../Components/FinalBookPage/TopBar';
import Hidden from '@material-ui/core/Hidden';


export default function Gallery() {
  return (
    <div className="App">

      <header className="App-header">
        {/* added top search bar for mobile version */}
        <Hidden mdUp>
          <PrimarySearchAppBar />
        </Hidden>

        {/* added top search bar for desktop version */}
        <Hidden mdDown>
          <TopBar />
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


      {/* added bottom navigation for mobile version */}
      <footer className="App-footer" position="sticky ">
        <Hidden mdUp>
          <SimpleBottomNavigation />
        </Hidden>
      </footer>
    </div>

  );
}