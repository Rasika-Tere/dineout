
// this is the final book page

import React from 'react';
import Container from '@material-ui/core/Container';
import RecipeReviewCard from '../Components/card';
import ReservationDetails from '../Components/FinalBookPage/ReservationDetails';
import ContinueBrowsingButton from '../Components/FinalBookPage/ContinueBrowsingButton';

export default function Gallery() {
  return (
    <React.Fragment>
      <Container fixed>
        <p>
          {/* this is text icon with button */}
          <ReservationDetails/>
         
         {/* this is the centre card with button */}
          <RecipeReviewCard/>  
         
          {/* this is continue browsing button */}
          <ContinueBrowsingButton/>
     
        </p>
      </Container>
    </React.Fragment>
  );
}