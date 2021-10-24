
// This component grid has all the other components of the page in sequence

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AdvertisementsCarousel from './AdvertisementsCarousel';
import BestOffersCarousel from './BestOffersCarousel';
import RestaurantsNearYouCarousel from './RestauranrsNearYouCarousel';
import TopPicksSingleLineImageList from './TopPicksImageList';
import SuperSaversCarousel from './SuperSaversCarousel';
import CenteredTabs from '../FinalBookPage/Tabs';
import Hidden from '@material-ui/core/Hidden';
import Main from '../../Assets/Main.jpg';
import DineoutLogo from '../../Assets/DineoutLogo.jpg'
import Typography from '@material-ui/core/Typography';
import FoodButtons from './FoodButtons';
import Button from '@material-ui/core/Button';
import FinalCard from '../FinalBookPage/FinalCard';
import Hotel1 from './Hotel1';






const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
    fontFamily: 'Futura',
    color: 'Grey',
  },


  text: {
    fontFamily: 'Futura',
    fontSize: 30,
    color: 'grey',
    padding: 6,
  },

  text2: {
    fontFamily: 'Futura',
    fontSize: 20,
    color: 'grey',
    paddingTop: 4,
    padding: 25,
  },


}));

export default function HomeGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1} justifyContent="center"

        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}
        direction="column"
      >
        <CenteredTabs />

        <img src={Main} alt="" width="1212" height="650">
        </img>

        {/* dineout logo */}
        <img src={DineoutLogo} alt="" width="400" height="110">
        </img>

        <Typography className={classes.text}>
          What are you waiting for? </Typography>

        <Typography className={classes.text2}> Check out your food new paradise ! </Typography>

        <FoodButtons />

        <Button> Restuarants Near you </Button>

        </Grid>

     

      








      {/* this is the carousal for advertisements, component name is caorusal1 */}
      <Hidden mdUp>
        <Grid item xs={12} md={12}>
          <AdvertisementsCarousel />
        </Grid>
      </Hidden>

      {/* this is the carousal for best offers, component name is caorusal2 */}
      <Hidden mdUp>
        <Grid item xs={12} md={12}>
          Best Offers
        </Grid>
      </Hidden>

      <Hidden mdUp>
        <Grid item xs={12} md={12}>
          <BestOffersCarousel />
        </Grid>
      </Hidden>

      <Hidden mdUp>
        <Grid item xs={12} md={12}>
          Restaurants Near You
        </Grid>
      </Hidden>

      <Hidden mdUp>
        {/* this is the carousal for restaurants near you, component name is caorusal3 */}
        <Grid item xs={12} md={12}>
          <RestaurantsNearYouCarousel />
        </Grid>
      </Hidden>

      <Hidden mdUp>
        {/* this is the swippable image list for top picks, component name is singleimagelist */}
        <Grid item xs={12} md={12}>
          Top Picks
        </Grid>
      </Hidden>

      <Hidden mdUp>
        <Grid item xs={12} md={12}>
          <TopPicksSingleLineImageList />
        </Grid>
      </Hidden>

      <Hidden mdUp>
        {/* this is the carousal for super savers, component name is caorusal4 */}
        <Grid item xs={12} md={12}>
          Super Savers
        </Grid>
      </Hidden>

      <Hidden mdUp>
        <Grid item xs={12} md={12}>
          <SuperSaversCarousel />
        </Grid>
      </Hidden>


      
      
      
      
      <Grid container spacing={0.5} justifyContent="center">

      <Grid item md={4}>
       <Hotel1/>
      </Grid>

      <Grid item md={4}>
        <FinalCard />
      </Grid>

      <Grid item md={4}>
        <FinalCard />
      </Grid>

      <Grid item md={4}>
        <FinalCard />
      </Grid>

      <Grid item md={4}>
        <FinalCard />
      </Grid>

      <Grid item md={4}>
        <FinalCard />
      </Grid>

      </Grid>
    </div>
  );
}
