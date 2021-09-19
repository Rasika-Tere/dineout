import React from 'react';
import Container from '@material-ui/core/Container';

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
          Best Offers
          <SwipeableTextMobileStepper/>
          Restaurants Near You
          <SwipeableTextMobileStepper/>
          <SingleLineImageList/>
          Super Savers
          <SwipeableTextMobileStepper/>
          <BottomNavigation/>
          
          </p>
      </Container>
    </React.Fragment>
  );
}