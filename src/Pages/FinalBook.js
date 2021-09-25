
// this is the final book page

import React from 'react';
import Container from '@material-ui/core/Container';
import ReservationDetails from '../Components/FinalBookPage/ReservationDetailsTitle';
import ContinueBrowsingButton from '../Components/FinalBookPage/ContinueBrowsingButton';
import FinalCard from '../Components/FinalBookPage/FinalCard';

export default function Gallery() {
  return (
    <React.Fragment>
      <Container fixed>
        <p>
          {/* this is text icon with button */}
          <ReservationDetails/>
         
         {/* this is the centre card with button */}
          <FinalCard/>  
         
          {/* this is continue browsing button */}
          <ContinueBrowsingButton/>
     
        </p>
      </Container>
    </React.Fragment>
  );
}