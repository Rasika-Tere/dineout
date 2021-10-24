
// this is the reservation step page

import React from 'react';
import Container from '@material-ui/core/Container';
import ReservationGrid from '../Components/ReservationPage/ReservationGrid';
import TopBar from '../Components/FinalBookPage/TopBar';
import Hidden from '@material-ui/core/Hidden';
import FooterContent from '../Components/FinalBookPage/FooterContent';
import Typography from '@material-ui/core/Typography';

export default function Gallery() {

  return (
    <div className="App">

      <header className="App-header">
        

        {/* added top search bar for desktop version */}
        <Hidden mdDown>
          <TopBar />
        </Hidden>
      </header>
    
    <React.Fragment>
      <Container fixed>
        {/* This component grid has all the other components of the page in grids */}
        <ReservationGrid />
      </Container>
    </React.Fragment>

    <footer className="App-footer" position="sticky ">
    <Typography>Services also available in</Typography>
        <FooterContent/>
      </footer>
    

    </div>


  );
}