
// this component is the text button with back arrow icon

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const useStyles = makeStyles((theme) => ({
  root: {
    

    button: {  
      
      minheight: 150,
      color: '#FF645A',
      fontfamily: "Futura",
      fontsize: 15,
  },
  },
}));

export default function ReservationDetailsTitle() {
  const classes = useStyles();

  return (
    <div className={classes.button}>
    


      <Button >
        <ArrowBackIosIcon />
        Reservation Details
      </Button>


    </div>
  );
}
