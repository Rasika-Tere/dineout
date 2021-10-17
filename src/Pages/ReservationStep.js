
// this is the reservation step page

import React from 'react';
import Container from '@material-ui/core/Container';
import ReservationGrid from '../Components/ReservationPage/ReservationGrid';


export default function Gallery() {

  return (
    <React.Fragment>
      <Container fixed>
        {/* This component grid has all the other components of the page in grids */}
        <ReservationGrid />

      </Container>
    </React.Fragment>

  );
}