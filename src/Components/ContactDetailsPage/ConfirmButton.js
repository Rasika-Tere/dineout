
// this is the confirm button (and the continue button)

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ConfrimButton() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
     
      <Button variant="contained" color="Secondary">
        {/* changed the color to secondary */}
        Confirm 
      </Button>
     
    </div>
  );
}
