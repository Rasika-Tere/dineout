import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ContactDetails from './ContactDetailsTitle';
import Illustration2 from '../Illustration2';
import DetailsTextFields from './DetailsTextField';
import ConfirmButton from './ConfirmButton';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function ContactDetailsGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
       
       {/* the contact deatils title */}
        <Grid item xs={12} lg={12}>
          <ContactDetails/>
        </Grid>
        
        {/* the illustration on the page, done by single image list */}
        <Grid item xs={12} lg={12}>
          <Illustration2/>
        </Grid>
        
         {/* enter your details text */}
         <Grid item xs={12} lg={12}>
         Enter Your Details
        </Grid>

        <Grid item xs={12} lg={12}>
         <DetailsTextFields/>
        </Grid>

        {/* this is the confirm button */}
        <Grid item xs={12} lg={12}>
         <ConfirmButton/>
        </Grid>

        
        
      </Grid>
    </div>
  );
}
