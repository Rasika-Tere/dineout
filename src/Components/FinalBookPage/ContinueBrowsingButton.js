
// continue browsing button, this button links back to the home page

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link, Router } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      minHeight: '50px',
      background: '#FF645A',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      fontfamily: "Times New Roman",
      padding: '0 75px',
      
    }

  },
  

}));

export default function ContinueBrowsingButton() {
  const classes = useStyles();


  return (
    <div className={classes.root}>


      <Link to={process.env.PUBLIC_URL + '/home'}>
        {/* <Button variant="contained" color="secondary" href=""> */}
          {/* the button links back to the home page */}
          Continue Browsing
        {/* </Button> */}
      </Link>

    </div>
  );
}
