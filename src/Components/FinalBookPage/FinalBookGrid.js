
//This grid component contains all the other components in grids sequentially

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ReservationDetailsTitle from './ReservationDetailsTitle';
import FinalCard from './FinalCard';
import ContinueBrowsingButton from './ContinueBrowsingButton';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

  },


}));

export default function FinalBookGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>

        {/* this is text button with icon */}
        <Grid item xs={8} md={12} >
          <ReservationDetailsTitle />
        </Grid>

        {/* this is the centre card with button */}
        <Grid item xs={12} md={12} >
          <FinalCard />
        </Grid>

        {/* this is continue browsing button */}
        <Grid item xs={12} md={12} >
          <ContinueBrowsingButton />
        </Grid>


      </Grid>
    </div>
  );
}
