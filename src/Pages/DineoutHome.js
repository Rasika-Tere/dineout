import React from 'react';
import Container from '@material-ui/core/Container';
import SearchAppBar from '../Components/searchbar';
import SwipeableTextMobileStepper from '../Components/carousal';
import SingleLineImageList from '../Components/SingleImageList';





export default function Gallery() {
  return (
    <React.Fragment>
      <Container fixed>
        <p>
          This is your dineout home page
          <SearchAppBar/>
          <SwipeableTextMobileStepper/>
          <SwipeableTextMobileStepper/>
          <SwipeableTextMobileStepper/>
          <SingleLineImageList/>
          <SwipeableTextMobileStepper/>
      
          
          </p>
      </Container>
    </React.Fragment>
  );
}