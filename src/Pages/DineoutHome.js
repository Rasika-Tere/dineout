import React from 'react';
import Container from '@material-ui/core/Container';
import SearchAppBar from '../Components/searchbar';
import SwipeableTextMobileStepper from '../Components/carousal';
import SingleLineImageList from '../Components/SingleImageList';
import { BottomNavigation } from '@material-ui/core';
import PrimarySearchAppBar from '../Components/AppBar';





export default function Gallery() {
  return (
    <React.Fragment>
      <Container fixed>
        <p>
          This is your dineout home page
          <PrimarySearchAppBar/>
          <SwipeableTextMobileStepper/>
          <SwipeableTextMobileStepper/>
          <SwipeableTextMobileStepper/>
          <SingleLineImageList/>
          <SwipeableTextMobileStepper/>
          <BottomNavigation/>
          
          </p>
      </Container>
    </React.Fragment>
  );
}