import React from 'react';
import Container from '@material-ui/core/Container';
import SearchAppBar from '../Components/searchbar';
import SwipeableTextMobileStepper from '../Components/carousal';





export default function Gallery() {
  return (
    <React.Fragment>
      <Container fixed>
        <p>
          This is your dineout home page
          <SearchAppBar/>
          <SwipeableTextMobileStepper/>
          
          </p>
      </Container>
    </React.Fragment>
  );
}