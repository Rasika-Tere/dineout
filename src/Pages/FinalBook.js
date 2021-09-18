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
          <ReservationDetails/>
          <RecipeReviewCard/>  
          <ContinueBrowsingButton/>
     
        </p>
      </Container>
    </React.Fragment>
  );
}