import React from 'react';
import Container from '@material-ui/core/Container';
import SingleLineImageList from '../Components/SingleImageList';
import PrimarySearchAppBar from '../Components/HomePage/AppBar';
import Carousel1 from '../Components/HomePage/Carousel1'
import Carousel2 from '../Components/HomePage/Carousel2'
import Carousel3 from '../Components/HomePage/Carousel3'
import Carousel4 from '../Components/HomePage/Carousel4'
import Grid from '@material-ui/core/Grid';

export default function Gallery() {
  return (
    <React.Fragment>
      <Container fixed>
        <p>
          {/* for top search bar */}
          <PrimarySearchAppBar />
          
          <Grid item xs={12} >
          {/* this is the carousal for advertisements, component name is caorusal1 */}
          <Carousel1 />
          </Grid>

          {/* this is the carousal for best offers, component name is caorusal2 */}
          Best Offers
          <Carousel2 />

          {/* this is the carousal for restaurants near you, component name is caorusal3 */}
          Restaurants Near You
          <Carousel3/>

          {/* this is the swippable image list for top picks, component name is singleimagelist */}
          Top Picks
          <SingleLineImageList />

          {/* this is the carousal for super savers, component name is caorusal4 */}
          Super Savers
           <Carousel4/>

          {/* The bottom navigation with all the icons have been added in the footer in App.js. That is why it is apperaring on every page */}

        </p>
      </Container>
    </React.Fragment>
  );
}