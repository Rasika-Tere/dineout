import React from 'react';
import Container from '@material-ui/core/Container';
import PrimarySearchAppBar from '../Components/HomePage/PrimarysearchBar';
import Grid from '@material-ui/core/Grid';
import SuperSaversCarousel from '../Components/HomePage/SuperSaversCarousel';
import AdvertisementsCarousel from '../Components/HomePage/AdvertisementsCarousel';
import BestOffersCarousel from '../Components/HomePage/BestOffersCarousel';
import TopPicksSingleLineImageList from '../Components/TopPicksSingleImageList';
import RestaurantsNearYou from '../Components/HomePage/RestauranrsNearYou';
import { BottomNavigation } from '@material-ui/core';
import HomeGrid from '../Components/HomePage/HomeGrid';

export default function Gallery() {
  return (
    <div className="App">

    <header className="App-header">
    {/* for top search bar */}
    <PrimarySearchAppBar />
    </header>
    <React.Fragment>
      <Container fixed>
        <p>
       

          <HomeGrid/>
          
          <Grid item xs={12} lg={5} >
          {/* this is the carousal for advertisements, component name is caorusal1 */}
           <AdvertisementsCarousel/>
          </Grid>

          {/* this is the carousal for best offers, component name is caorusal2 */}
          Best Offers
          <BestOffersCarousel/>

          {/* this is the carousal for restaurants near you, component name is caorusal3 */}
          Restaurants Near You
          <RestaurantsNearYou/>

          {/* this is the swippable image list for top picks, component name is singleimagelist */}
          Top Picks
          <TopPicksSingleLineImageList/>

          {/* this is the carousal for super savers, component name is caorusal4 */}
          Super Savers
           <SuperSaversCarousel/>

          {/* The bottom navigation with all the icons have been added in the footer in App.js. That is why it is apperaring on every page */}

        </p>
      </Container>
    </React.Fragment>
    <footer className="App-footer" position="sticky ">
       <BottomNavigation/>
      </footer>
    </div>

  );
}