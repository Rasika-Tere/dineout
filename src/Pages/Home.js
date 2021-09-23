import React from 'react';
import Container from '@material-ui/core/Container';
import SingleLineImageList from '../Components/SingleImageList';
import PrimarySearchAppBar from '../Components/HomePage/AppBar';
import TextMobileStepper1 from '../Components/carousal2'


export default function Gallery() {
  return (
    <React.Fragment>
      <Container fixed>
        <p>
          {/* for top search bar */}
          <PrimarySearchAppBar/> 
        
         {/* this is the carousal for advertisements, component name is caorusal1 */}
          
          
         
         {/* this is the carousal for best offers, component name is caorusal2 */}
           Best Offers
          <TextMobileStepper1/>
          
          {/* this is the carousal for restaurants near you, component name is caorusal3 */}
           Restaurants Near You
          
         {/* this is the swippable image list for top picks, component name is singleimagelist */}
           Top Picks
         <SingleLineImageList/>
          
          {/* this is the carousal for super savers, component name is caorusal4 */}
          Super Savers
         
          
          {/* The bottom navigation with all the icons have been added in the footer in App.js. That is why it is apperaring on every page */}
  
          </p>
      </Container>
    </React.Fragment>
  );
}