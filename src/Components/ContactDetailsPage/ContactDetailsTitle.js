
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
  },
}));

export default function ContactDetails() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <Link to={process.env.PUBLIC_URL + '/reservationstep'}>
        <Button color="Secondary">
          <ArrowBackIosIcon />
          Contact Details
        </Button>
      </Link>

    </div>
  );
}
