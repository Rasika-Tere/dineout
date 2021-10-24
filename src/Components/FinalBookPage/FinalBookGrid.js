
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
import DesktopReservationTitle from './DesktopReservationTitle';
import CancelButton from './CancelButton';
import AlertDialog from './DownloadPDF';
import DownloadPDF from './DownloadPDF';
import DesktopContinueBrowsingButton from './DesktopContinueBrowsingButton';

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

      <Grid container spacing={1} >

        <Hidden mdDown>
          <TopBar />
        </Hidden>

        <Hidden mdDown>
          <CenteredTabs />
        </Hidden>

        <Grid item xs={10} md={12} >
          <Hidden mdDown>
            <DesktopReservationTitle />
          </Hidden>
        </Grid>

        <DesktopCard />
       

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




      {/* <Grid container spacing={1} 
      direction= "column"
      > */}

        <Hidden item md={4} mdDown>
          <DownloadPDF />
          </Hidden>

        <Hidden item md={4} mdDown >
          <CancelButton />
          </Hidden>

        <Hidden  item md={4} mdDown>
          <DesktopContinueBrowsingButton/>
        </Hidden> 

{/* </Grid> */}
    </div>
  );
}
