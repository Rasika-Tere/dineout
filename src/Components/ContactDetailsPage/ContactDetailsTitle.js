
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

  typography: {
    fontFamily: 'Futura',
    fontSize: 15,
    color: '#FF645A',
  }
}));

export default function ContactDetailsTitle() {
  const classes = useStyles();
  

  return (
    <div className={classes.root}>
      
      {/* this title links back to the contact details page (previous Page) */}
      <Link to={process.env.PUBLIC_URL + '/reservationstep'}>
        <Button className={classes.typography} href="" >
          <ArrowBackIosIcon />
          Contact Details
        </Button>
      </Link>

    </div>
  );
}
