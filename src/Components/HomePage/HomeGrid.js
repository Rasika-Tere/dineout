import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { TextField } from '@material-ui/core';

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

export default function HomeGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
       <Grid container spacing={3} justifyContent="center"
      alignItems="center"
> 
        <Grid item xs={7} md={2}>
          <TextField/>
        </Grid>
        <Grid item xs={5} md={2}>
        <TextField/>
        </Grid>
        <Grid item xs={6} md={2}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={3} md={2}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3} md={2}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3} md={2}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3} md={2}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
       </Grid> 
    </div>
  );
}
