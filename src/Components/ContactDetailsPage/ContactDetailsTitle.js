
// this component is done with text button with back arrow icon

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link, Router } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },

    button: {
      minheight: 150,
      color: '#FF645A',
      fontfamily: "Futura",
      height: 15,

    },
  },
}));

export default function ContactDetails() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      {/* this title links back to the reservation step page (previous Page) */}
      <Link to={process.env.PUBLIC_URL + '/reservationstep'}>
        <Button color="Secondary"className={classes.button}>
          <ArrowBackIosIcon />
          Contact Details
        </Button>
      </Link>

    </div>
  );
}
