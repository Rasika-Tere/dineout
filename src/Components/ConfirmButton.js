
// this is the continue button, I was unabe to rename it

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

export default function ConfirmButton() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
     
      <Button variant="contained" color="Secondary">
        Continue
      </Button>
     
    </div>
  );
}
