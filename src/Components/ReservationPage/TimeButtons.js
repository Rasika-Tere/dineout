
// this component is for the time selection

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(0.5),
      
     
    },
 button: {
  backgroundColor:"#FF645A",
    Color: 'white',
    fontFamily: 'futura',
    fontSize: 14.5,
    fontWeight: 'normal',
    height: 40,
 },
 
  },
}));

export default function TimeButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      {/* repeated the buttons for the different times */}
      <Grid container spacing={1}>

        <Grid item xs={4} >
          <Button className={classes.button}>
            12.00
          </Button>
        </Grid>

        <Grid item xs={4} >
          <Button className={classes.button}>
            12.15
          </Button>
        </Grid>

        <Grid item xs={4} >
          <Button className={classes.button}>
            12.30
          </Button>
        </Grid>

        <Grid item xs={4} >
          <Button className={classes.button}>
            12.45
          </Button>
        </Grid>

        <Grid item xs={4} >
          <Button className={classes.button}>
            01.00
          </Button>
        </Grid>

        <Grid item xs={4} >
          <Button className={classes.button}>
            01.15
          </Button>
        </Grid>

        <Grid item xs={4} >
          <Button className={classes.button}>
            01.30
          </Button>
        </Grid>

        <Grid item xs={4} >
          <Button className={classes.button}>
            01.45
          </Button>
        </Grid>

        <Grid item xs={4} >
          <Button className={classes.button}>
            02.00
          </Button>
        </Grid>

        <Grid item xs={4} >
          <Button className={classes.button}>
            02.15
          </Button>
        </Grid>

        <Grid item xs={4} >
          <Button className={classes.button}>
            02.30
          </Button>
        </Grid>

        <Grid item xs={4} >
          <Button className={classes.button}>
            02.45
          </Button>
        </Grid>

      </Grid>
    </div>
  );
}
