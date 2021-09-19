import React from 'react';
import Container from '@material-ui/core/Container';
import SwipeableTextMobileStepper from '../Components/carousal';
import SingleLineImageList from '../Components/SingleImageList';
import PrimarySearchAppBar from '../Components/AppBar';

export default function Gallery() {
  return (
    <React.Fragment>
      <Container fixed>
        <p>
          {/* for top search bar */}
          <PrimarySearchAppBar/> 
        
         {/* this is the carousal for advertisements */}
          <SwipeableTextMobileStepper/>
          
         
         {/* this is the carousal for best offers */}
           Best Offers
          <SwipeableTextMobileStepper/>
          
         
          {/* this is the carousal for restaurants near you */}
           Restaurants Near You
          <SwipeableTextMobileStepper/>
         
         {/* this is the swippable image list for top picks */}
           Top Picks
         <SingleLineImageList/>
          
          {/* this is the carousal for super savers */}
          Super Savers
          <SwipeableTextMobileStepper/>
          
          {/* The bootom navigation with all the icons have been added in the footer in App.js. That is why it is apperaring on every page */}
  
          </p>
      </Container>
    </React.Fragment>
  );
}