
//This grid component contains all the other components in grids sequentially

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ReservationDetailsTitle from './ReservationDetailsTitle';
import FinalCard from './FinalCard';
import ContinueBrowsingButton from './ContinueBrowsingButton';
import TopBar from './TopBar';
import DesktopCard from './DesktopCard';
import Hidden from '@material-ui/core/Hidden';

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

        <TopBar/>

        {/* this is text button with icon */}
        <Grid item xs={10} md={12} >
          <ReservationDetailsTitle />
        </Grid>

        {/* this is the centre card with button */}
        <Grid item xs={12} md={12} >
        <Hidden mdUp>
          <FinalCard />
          </Hidden>
        </Grid>

        <DesktopCard/>

        {/* this is continue browsing button */}
        <Grid item xs={12} md={12} >
          <ContinueBrowsingButton />
        </Grid>


      </Grid>
    </div>
  );
}
