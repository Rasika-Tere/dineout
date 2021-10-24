import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
//  added the back icon here
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link, Router } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(3),
      width: theme.spacing(120),
      height: theme.spacing(8),
    },
  },

  typography: {
    fontFamily: 'Futura',
    fontSize: 30,
    color: '#FF645A',
  }
}));

export default function DesktopReservationTitle() {
  const classes = useStyles();


  return (
    <div className={classes.root}>

      {/* this title links back to the contact details page (previous Page) */}
      <Link to={process.env.PUBLIC_URL + '/contactdetails'}>
        <Button className={classes.typography} href="" >
          <ArrowBackIosIcon />
          Reservation Details
        </Button>
      </Link>

    </div>
  );
}
