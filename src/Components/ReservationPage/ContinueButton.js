
// the continue button

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link, Router } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContinueButton() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* this button links to the contact details page (the next page) */}
      <Link to={process.env.PUBLIC_URL + '/contactdetails'}>
      <Button variant="contained" color="secondary">
        Continue
      </Button>
      </Link>
      
    </div>
  );
}
