
// this is the reservation step page

import React from 'react';
import Container from '@material-ui/core/Container';
import ReservationGrid from '../Components/ReservationPage/ReservationGrid';
import App from '../Components/HomePage/trialaccordion';

export default function Gallery() {

  return (
    <React.Fragment>
      <Container fixed>
        {/* This component grid has all the other components of the page in grids */}
        <ReservationGrid />
        {/* <App/> */}
      </Container>
    </React.Fragment>
    
  );
}