import React from 'react';
import Container from '@material-ui/core/Container';
import ReservationGrid from '../Components/ReservationPage/ReservationGrid';

export default function Gallery() {


  return (
    <React.Fragment>
      <Container fixed>

        <ReservationGrid />
        
      </Container>

    </React.Fragment>
  );
}