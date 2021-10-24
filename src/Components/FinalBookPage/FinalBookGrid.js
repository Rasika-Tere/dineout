
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
import TopPaper from './TopPaper';
import DineoutLogo from '../../Assets/DineoutLogo.jpg';
import Tabs from './Tabs';
import AllTabs from './Tabs';
import CenteredTabs from './Tabs';
import InfoCard from './InfoCard';
import DesktopReservationTitle from './DesktopReservationTitle';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 0,
    paddingLeft: 0.5,
  },

  logo: {
    right: 0.5,
  },

}));

export default function FinalBookGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <Grid container spacing={2} >

        <Hidden mdDown>
          <Grid item md={2}  >
            <img src={DineoutLogo} alt="" width="170" height="60">
            </img>
          </Grid>
        </Hidden>

        <Hidden mdDown>
          <Grid item md={10} >
            <TopPaper />
          </Grid>
        </Hidden>

        {/* <TopBar/>  */}

        <Hidden mdDown>
          <CenteredTabs />
        </Hidden>

        <Grid item xs={10} md={12} >
        <DesktopReservationTitle/>
        </Grid>
      
        <DesktopCard />

        <InfoCard />






        {/* Mobile Components */}

        {/* this is text button with icon */}
        <Grid item xs={10} md={12} >
          <Hidden mdUp>
            <ReservationDetailsTitle />
          </Hidden>
        </Grid>

        {/* this is the centre card with button */}
        <Grid item xs={12} md={12} >
          <Hidden mdUp>
            <FinalCard />
          </Hidden>
        </Grid>

        {/* this is continue browsing button */}
        <Grid item xs={12} md={12} >
          <Hidden mdUp>
            <ContinueBrowsingButton />
          </Hidden>
        </Grid>


      </Grid>
    </div>
  );
}
