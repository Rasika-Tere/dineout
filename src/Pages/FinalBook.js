import React from 'react';
import Container from '@material-ui/core/Container';
import TextButtons from '../Components/Textbutton';
import RecipeReviewCard from '../Components/card';
import ContainedButtons from '../Components/ContainedButtons';
import CircularIndeterminate from '../Components/LoadingIcon';

export default function Gallery() {
  return (
    <React.Fragment>
      <Container fixed>
        <p>
          This is your Final Book page
          <TextButtons/>
          <RecipeReviewCard/>
          <ContainedButtons/>
          <CircularIndeterminate/>
        </p>
      
      </Container>
    </React.Fragment>
  );
}