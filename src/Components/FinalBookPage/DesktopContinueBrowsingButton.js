
// continue browsing button, this button links back to the home page

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
    height: 40,
    padding: '0 60px',
    left: 160,
    bottom: 270,
  },

}));

export default function DesktopContinueBrowsingButton() {
  const classes = useStyles();
  

  return (

    <div className={classes.root}>
      {/* this button links to the contact details page (the next page) */}
      <Link to={process.env.PUBLIC_URL + '/home'}>
        <Button variant="contained" className={classes.button}>
          Continue Browsing
        </Button>
      </Link>
    </div>
  );
}
