import React from 'react';
import Container from '@material-ui/core/Container';
import ReservationGrid from '../Components/ReservationPage/ReservationGrid';

export default function Gallery() {


  return (
    <React.Fragment>
      <Container fixed>

        {/* This grid component  contains all the other components in grids */}
        <ReservationGrid />

      </Container>

    </React.Fragment>
  );
}