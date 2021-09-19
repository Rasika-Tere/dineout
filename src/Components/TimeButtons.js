
// this component is the time selection

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function TimeButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
     
     {/* i repeated the buttons for the different times */}
     
     <Grid item xs={4} md={12} spacing={3}>
      <Button variant="contained" color="primary">
        12.00
      </Button>
      </Grid>

      <Grid item xs={8} md={12} spacing={3}>
      <Button variant="contained" color="primary">
        12.15
      </Button>
      </Grid>

      <Grid item xs={4} md={12} spacing={3}>
      <Button variant="contained" color="primary">
        12.30
      </Button>
      </Grid>

      <Grid item xs={12} md={12} spacing={3}>
      <Button variant="contained" color="primary">
        12.45
      </Button>
      </Grid>

      <Grid item xs={12} md={12} spacing={3}>
      <Button variant="contained" color="primary">
        01.00
      </Button>
      </Grid>

      <Grid item xs={12} md={12} spacing={3}>
      <Button variant="contained" color="primary">
        01.15
      </Button>
      </Grid>

      <Grid item xs={12} md={12} spacing={3}>
      <Button variant="contained" color="primary">
        01.30
      </Button>
      </Grid>

      <Grid item xs={12} md={12} spacing={3}>
      <Button variant="contained" color="primary">
        01.45
      </Button>
      </Grid>

      <Grid item xs={2} md={12} spacing={3}>
      <Button variant="contained" color="primary">
        02.00
      </Button>
      </Grid>

      <Grid item xs={12} md={12} spacing={3}>
      <Button variant="contained" color="primary">
        02.15
      </Button>
      </Grid>

      <Grid item xs={12} md={12} spacing={3}>
      <Button variant="contained" color="primary">
        02.30
      </Button>
      </Grid>

      <Grid item xs={2} md={12} spacing={3}>
      <Button variant="contained" color="primary">
        02.45
      </Button>
      </Grid>

    </div>
  );
}
