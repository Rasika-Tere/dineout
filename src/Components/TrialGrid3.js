import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Hidden } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
      <Hidden xsUp>
        <Grid item xs={12} md={4}>
          <Paper className={classes.paper}>xs=logo</Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper className={classes.paper}>xs=navigation</Paper>
        </Grid>
        <Grid item xs={12} md={12}>
          <Paper className={classes.paper}>xs=carousal</Paper>
        </Grid>
        </Hidden>
        <Grid item xs={12} md={4}>
          <Paper className={classes.paper}>xs=feature</Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className={classes.paper}>xs=feature</Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className={classes.paper}>xs=feature</Paper>
        </Grid>
        <Grid item xs={12} md={12}>
          <Paper className={classes.paper}>xs=footer</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
