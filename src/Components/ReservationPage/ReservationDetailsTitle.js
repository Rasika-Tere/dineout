
// this component is the text button with back arrow icon

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ReservationDetailsTitle() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      {/* i changed the color here */}
      <Button color="Secondary">
      <ArrowBackIosIcon/>
        Reservation Details 
      </Button>
     
    
    </div>
  );
}
