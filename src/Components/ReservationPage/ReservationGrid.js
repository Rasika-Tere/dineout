
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
import Hidden from '@material-ui/core/Hidden';
import CenteredTabs from '../FinalBookPage/Tabs';
import DesktopReservationDetailsTitle from './DesktopReservationDetailsTitle';
import DesktopDateandTime from './Desktopdatetime';
import DesktopMeal from './DesktopMealSelect';





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


        <Hidden mdDown>
          <CenteredTabs />
        </Hidden>



        <Grid item xs={8} md={12} >
          <Hidden mdDown>
            <DesktopReservationDetailsTitle />
          </Hidden>
        </Grid>

        {/* the illustration on the page */}
        <Grid item xs={12} md={12} >
          <Hidden mdDown>
            <img src={Illustration1} alt="" width="760" height="500">
            </img>
          </Hidden>
        </Grid>
<DesktopMeal/>
<DesktopDateandTime/>






        {/* mobile Components */}
        {/* reservation details title */}

        <Grid item xs={8} md={12} >
          <Hidden mdUp>
            <ReservationDetailsTitle />
          </Hidden>
        </Grid>

        {/* illustration on the page */}
        <Grid item xs={12} md={12} >
          <Hidden mdUp>
            <img src={Illustration1} alt="" width="270" height="300">
            </img>
          </Hidden>
        </Grid>

        {/* for selecting the date, the component name is datetime*/}
        <Grid item xs={12} md={12}>
          <Hidden mdUp>
            <MaterialUIPickers />
          </Hidden>
        </Grid>

        {/* for selecting the meal */}
        <Grid item xs={12} md={12}>
          <Hidden mdUp>
            <MealSelection />
          </Hidden>
        </Grid>

        {/* for selecting the time of meal*/}
        <Grid item xs={12} md={12} >
          <Hidden mdUp>
            <TimeAccordion />
          </Hidden>
        </Grid>

        {/* the continue button */}
        <Grid item xs={12} md={12} >
          <Hidden mdUp>
            <ContinueButton />
          </Hidden>
        </Grid>

      </Grid>
    </div>
  );
}
