
// continue browsing button, this button links back to the home page

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link, Router } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      background: '#FF645A',
      border: 0,
      borderRadius: 18,
      minheight: 150,
      color: 'white',
      fontfamily: "Futura",
      height: 48,
      padding: '0 70px',
    

    }

  },


}));

export default function ContinueBrowsingButton() {
  const classes = useStyles();


  return (
    <div className={classes.root}>


      <Link to={process.env.PUBLIC_URL + '/home'} >
        {/* <Button variant="contained" color="secondary" href=""> */}
          {/* the button links back to the home page */}
          Continue Browsing
        {/* </Button> */}
      </Link>

    </div>
  );
}
