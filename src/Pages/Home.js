
// this is the home page

import React from 'react';
import Container from '@material-ui/core/Container';
import HomeGrid from '../Components/HomePage/HomeGrid';
import SimpleBottomNavigation from '../Components/HomePage/SimpleBottomNavigation';
import PrimarySearchAppBar from '../Components/HomePage/PrimarysearchBar';





export default function Gallery() {
  return (
    <div className="App">

      <header className="App-header">
        {/* added top search bar */}
        <PrimarySearchAppBar/>
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