
//This grid component contains all the other components in grids sequentially

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ContactDetails from './ContactDetailsTitle';
import Illustration2 from '../../Assets/illustration2.png';
import NameTextFields from './NameTextField';
import MobileNoTextFields from './MobileNoTextField';
import EmailIdTextFields from './EmailIdTextField';
import GuestNoTextFields from './GuestsNoTextField';
import ConfirmButton from './ConfirmButton';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0.5,
    textAlign: 'centre'
  },

}));

export default function ContactDetailsGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <Grid container spacing={0}>

        {/* the contact deatils title */}
        <Grid item xs={8} md={12} >
          <ContactDetails />
        </Grid>

        {/* the illustration on the page */}
        <Grid item xs={12} md={12} >
          <img src={Illustration2} alt="" width="263" height="350">
          </img>
        </Grid>


        {/* for entering your details text */}
        <Grid item xs={7} >
          Enter Your Details
        </Grid>

        {/* for entering your name text */}
        <Grid item xs={12} >
          <NameTextFields />
        </Grid>

        {/* for entering your mobile no */}
        <Grid item xs={12} >
          <MobileNoTextFields />
        </Grid>

        {/* for entering your email id */}
        <Grid item xs={12} >
          <EmailIdTextFields />
        </Grid>

        {/* Select No. of Guests text */}
        <Grid item xs={10} >
          Select No. of Guests (max.20)
        </Grid>

        {/* for entering your guest no*/}
        <Grid item xs={12} >
          <GuestNoTextFields />
        </Grid>

        {/* this is the confirm button */}
        <Grid item xs={12} >
          <ConfirmButton />
        </Grid>



      </Grid>
    </div>
  );
}
