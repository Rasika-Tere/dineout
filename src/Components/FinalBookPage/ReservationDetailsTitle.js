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
}));

export default function ReservationDetailsTitle() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* this title links back to the contact details page (previous Page) */}
      <Link to={process.env.PUBLIC_URL + '/contactdetails'}>
        <Button color="Secondary" href="">
          <ArrowBackIosIcon />
          Reservation Details
        </Button>
      </Link>

    </div>
  );
}
