
// continue browsing button, this button links back to the home page

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link, Router } from "react-router-dom";
import Grid from '@material-ui/core/Grid';

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
      fontsize: 4,
      height: 40,
      padding: '0 70px',
      
    

    }

  },


}));

export default function ContinueBrowsingButton() {
  const classes = useStyles();

 
  return (
    
    
    <div className={classes.root}>
    {/* this button links to the contact details page (the next page) */}
    {/* <Link to={process.env.PUBLIC_URL + '/contactdetails'}> */}
    <Button variant="contained" color="secondary" style="font-size=2px;">
      Continue 2
    </Button>
    {/* </Link> */}
    
  </div>
    
    // <div>


      // <Link to={process.env.PUBLIC_URL + '/home'} >
        // {/* <Button variant="contained" color="secondary" href=""> */}
          // {/* the button links back to the home page */}
          // Continue Browsing
        // {</Button> 
      // </Link>


    // </div>
  );
}
