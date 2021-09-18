import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

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
      
      <Button color="Secondary">
      <ArrowBackIosIcon/>
        Contact Details
      </Button>
     
    
    </div>
  );
}
