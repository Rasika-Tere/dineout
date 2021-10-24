
//This grid component contains all the other components in grids sequentially

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ContactDetailsTitle from './ContactDetailsTitle';
import Illustration2 from '../../Assets/illustration2.png';
import NameTextFields from './NameTextField';
import MobileNoTextFields from './MobileNoTextField';
import EmailIdTextFields from './EmailIdTextField';
import GuestNoTextFields from './GuestsNoTextField';
import ConfirmButton from './ConfirmButton';
import Hidden from '@material-ui/core/Hidden';
import CenteredTabs from '../FinalBookPage/Tabs';
import DesktopReservationTitle from '../FinalBookPage/DesktopReservationTitle';
import DesktopNameTextFields from './DesktopNameTextField';
import DesktopMobileNoTextFields from './DesktopMobileNoTextField';
import DesktopEmailIdTextFields from './DesktopEmailIdTextField';
import DesktopGuestNoTextFields from './DesktopGuestsNoTextField copy';
import DeskTopConfirmButton from './DesktopConfirmButton';
import DesktopGoBackButton from './DesktopGoBackButton copy';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0.5,
    textAlign: 'centre',
    fontFamily: 'futura',
    color: 'grey',
  },

}));

export default function ContactDetailsGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <Grid container spacing={1}>

       {/* Desktop Components */}

       <CenteredTabs/>

       <DesktopReservationTitle/>
       
       {/* the illustration on the page */}
       <Grid item xs={12} md={12} >
        <Hidden mdDown>
          <img src={Illustration2} alt="" width="325" height="350">
          </img>
          </Hidden>
        </Grid>

{/* for entering your details text */}
<Grid item xs={6} md={12}>
        <Hidden mdDown>
          Enter Your Details
          </Hidden>
        </Grid>

        <Grid item xs={12} md={12}>
        <Hidden mdDown>
       <DesktopNameTextFields/>
       </Hidden>
        </Grid>

        <Grid item xs={12} md={12}>
        <Hidden mdDown>
        <DesktopMobileNoTextFields/>
        </Hidden>
        </Grid>

        <Grid item xs={12} md={12}>
        <Hidden mdDown>
        <DesktopEmailIdTextFields/>
        </Hidden>
        </Grid>

        <Grid item xs={12} md={12}>
        <Hidden mdDown>
        Select No. of Guests (max.20)
        </Hidden>
        </Grid>

        
        <Grid item xs={12} md={12}>
        <Hidden mdDown>
        <DesktopGuestNoTextFields/>
        </Hidden>
        </Grid>

        <Grid item xs={12} md={12}>
        <Hidden mdDown>
        <DeskTopConfirmButton/>
        </Hidden>
        </Grid>
       
        <Grid item xs={12} md={12}>
        <Hidden mdDown>
        <DesktopGoBackButton/>
        </Hidden>
        </Grid>
      
       
       
       
       
       
       
        {/* the contact deatils title */}
        
        <Grid item xs={8} md={12} >
        <Hidden mdUp>
          <ContactDetailsTitle />
          </Hidden>
        </Grid>

        {/* the illustration on the page */}
        <Grid item xs={12} md={12} >
        <Hidden mdUp>
          <img src={Illustration2} alt="" width="325" height="350">
          </img>
          </Hidden>
        </Grid>


        {/* for entering your details text */}
        <Grid item xs={6} md={12}>
        <Hidden mdUp>
          Enter Your Details
          </Hidden>
        </Grid>

        {/* for entering your name text */}
        <Grid item xs={12} md={12}>
        <Hidden mdUp>
          <NameTextFields />
          </Hidden>
        </Grid>

        {/* for entering your mobile no */}
        <Grid item xs={12} md={12}>
        <Hidden mdUp>
          <MobileNoTextFields />
          </Hidden>
        </Grid>

        {/* for entering your email id */}
        <Grid item xs={12} md={12}>
        <Hidden mdUp>
          <EmailIdTextFields />
          </Hidden>
        </Grid>

        {/* Select No. of Guests text */}
        <Grid item xs={10} md={12}>
        <Hidden mdUp>
          Select No. of Guests (max.20)
          </Hidden>
        </Grid>

        {/* for entering your guest no*/}
        <Grid item xs={12} md={12}>
        <Hidden mdUp>
          <GuestNoTextFields />
          </Hidden>
        </Grid>

        {/* this is the confirm button */}
        <Grid item xs={12} md={12}>
        <Hidden mdUp>
          <ConfirmButton />
          </Hidden>
        </Grid>

        <Grid item xs={12} md={12}>

        </Grid>


      </Grid>
    </div>
  );
}
