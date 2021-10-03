import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ReservationDetailsTitle from './ReservationDetailsTitle';
import Illustration1 from '../../Assets/illustration1.png';
import MaterialUIPickers from './datetime';
import MealSelection from './MealSelection';
import SimpleAccordion from './accordian';
import ContinueButton from './ContinueButton';

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

export default function ReservationGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>

        {/* reservation details title */}
        <Grid item xs={10} md= {12} lg={12}>
          <ReservationDetailsTitle />
        </Grid>

        {/* illustration on the page */}
        <Grid item xs={12}  md= {12} lg={12}>
          <img src={Illustration1} alt="" width="358" height="300">
          </img>
        </Grid>

        {/* for selecting the date, the component name is datetime, i was unabel to rename it */}
        <Grid item xs={12} lg={12}>
          <MaterialUIPickers />
        </Grid>

        {/* for selecting the meal */}
        <Grid item xs={12} lg={12}>
          <MealSelection />
        </Grid>

        {/* for selecting the time of meal, the compoenent name is timebuttons, i was unabel to rename it */}
        <Grid item xs={12} lg={12}>
          <SimpleAccordion />
        </Grid>

        {/* the continue button, but i was unable to rename it */}
        <Grid item xs={12} lg={12}>
          <ContinueButton />
        </Grid>

      </Grid>
    </div>
  );
}
