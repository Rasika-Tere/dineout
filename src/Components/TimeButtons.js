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
     
     <Grid item xs={4} md={12} spacing={3}>
      <Button variant="contained" color="primary">
        12.15
      </Button>
      </Grid>

      <Grid item xs={8} md={12} spacing={3}>
      <Button variant="contained" color="primary">
        12.15
      </Button>
      </Grid>

      <Grid item xs={4} md={12} spacing={3}>
      <Button variant="contained" color="primary">
        12.15
      </Button>
      </Grid>

      <Grid item xs={12} md={12} spacing={3}>
      <Button variant="contained" color="primary">
        12.15
      </Button>
      </Grid>

      <Grid item xs={12} md={12} spacing={3}>
      <Button variant="contained" color="primary">
        12.15
      </Button>
      </Grid>

      <Grid item xs={12} md={12} spacing={3}>
      <Button variant="contained" color="primary">
        12.15
      </Button>
      </Grid>

      <Grid item xs={12} md={12} spacing={3}>
      <Button variant="contained" color="primary">
        12.15
      </Button>
      </Grid>

      <Grid item xs={12} md={12} spacing={3}>
      <Button variant="contained" color="primary">
        12.15
      </Button>
      </Grid>

      <Grid item xs={2} md={12} spacing={3}>
      <Button variant="contained" color="primary">
        12.15
      </Button>
      </Grid>

    </div>
  );
}
