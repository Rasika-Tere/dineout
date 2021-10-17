import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
//  added the back icon here
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link, Router } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },

  typography: {
    fontFamily: 'Futura',
    fontSize: 15,
    color: '#FF645A',
  }
}));

export default function ReservationDetailsTitle() {
  const classes = useStyles();


  return (
    <div className={classes.root}>



      <Button className={classes.typography} href="" >
        <ArrowBackIosIcon />
        Reservation Details
      </Button>


    </div>
  );
}
