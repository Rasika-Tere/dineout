
// This component grid has all the other components of the page in sequence

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AdvertisementsCarousel from './AdvertisementsCarousel';
import BestOffersCarousel from './BestOffersCarousel';
import RestaurantsNearYouCarousel from './RestauranrsNearYouCarousel';
import TopPicksSingleLineImageList from '../HomePage/TopPicksSingleImageList'
import SuperSaversCarousel from './SuperSaversCarousel';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
  },

}));

export default function HomeGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} justifyContent="center"
        alignItems="left"
      >

        {/* this is the carousal for advertisements, component name is caorusal1 */}
        <Grid item xs={12} lg={12}>
          <AdvertisementsCarousel />
        </Grid>

        {/* this is the carousal for best offers, component name is caorusal2 */}
        <Grid item xs={12} lg={12}>
          Best Offers
        </Grid>

        <Grid item xs={12} lg={12}>
          <BestOffersCarousel />
        </Grid>

        <Grid item xs={12} lg={12}>
          Restaurants Near You
        </Grid>

        {/* this is the carousal for restaurants near you, component name is caorusal3 */}
        <Grid item xs={12} lg={12}>
          <RestaurantsNearYouCarousel/>
        </Grid>

        {/* this is the swippable image list for top picks, component name is singleimagelist */}
        <Grid item xs={12} lg={12}>
          Top Picks
        </Grid>

        <Grid item xs={12} lg={12}>
          <TopPicksSingleLineImageList />
        </Grid>

        {/* this is the carousal for super savers, component name is caorusal4 */}
        <Grid item xs={12} lg={12}>
          Super Savers
        </Grid>

        <Grid item xs={12} lg={12}>
          <SuperSaversCarousel />
        </Grid>
      </Grid>
    </div>
  );
}
