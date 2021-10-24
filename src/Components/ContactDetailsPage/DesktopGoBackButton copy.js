
// confirm  button, this button links back to the next page

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link, Router } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    }

  },
  // button customization
  button: {
    background: '#FF645A',
    borderRadius: 9,
    minheight: 150,
    color: 'white',
    fontFamily: 'futura',
    fontSize: 14.5,
    fontWeight: 'normal',
    height: 43,
    padding: '0 90px',
  },

}));

export default function DesktopGoBackButton() {
  const classes = useStyles();

  return (

    <div className={classes.root}>
      {/* this button links to the finalbook page (the next page) */}
      <Link to={process.env.PUBLIC_URL + '/finalbook'}>
        <Button variant="contained" className={classes.button}>
         Go Back
        </Button>
      </Link>
    </div>
  );
}
