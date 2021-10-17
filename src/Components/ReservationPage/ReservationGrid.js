
//This grid component contains all the other components in grids sequentially

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ReservationDetailsTitle from './ReservationDetailsTitle';
import Illustration1 from '../../Assets/illustration1.png';
import MaterialUIPickers from './datetime';
import MealSelection from './MealSelection';
import TimeAccordion from './TimeAccordion';
import ContinueButton from './ContinueButton';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

}));

export default function ReservationGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>

        {/* reservation details title */}
        <Grid item xs={10} md={12} >
          <ReservationDetailsTitle />
        </Grid>

        {/* illustration on the page */}
        <Grid item xs={12} md={12} >
          <img src={Illustration1} alt="" width="270" height="300">
          </img>
        </Grid>

        {/* for selecting the date, the component name is datetime*/}
        <Grid item xs={12} md={12}>
          <MaterialUIPickers />
        </Grid>

        {/* for selecting the meal */}
        <Grid item xs={12} md={12}>
          <MealSelection />
        </Grid>

        {/* for selecting the time of meal*/}
        <Grid item xs={12} md={12} >
          <TimeAccordion />
        </Grid>

        {/* the continue button */}
        <Grid item xs={12} md={12} >
          <ContinueButton />
        </Grid>

      </Grid>
    </div>
  );
}
