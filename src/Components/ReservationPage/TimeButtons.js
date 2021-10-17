
// this component is for the time selection

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(0.05),


    },
    button: {
      backgroundColor: "#FF645A",
      Color: 'white',
      fontFamily: 'futura',

    },

  },
}));

export default function TimeButtons() {
  const classes = useStyles();
  const style = {

    top: 'auto',
    right: 'auto',


    backgroundColor: '#F2635C',
    color: '#FFFFFF'
  };

  return (
    <div className={classes.root}>

      {/* repeated the buttons for the different times */}
      <Grid container spacing={1}>

        <Grid item xs={4} >
          <Button variant='contained' style={style}>
            12.00
          </Button>
        </Grid>

        <Grid item xs={4} >
          <Button variant='contained' style={style}>
            12.15
          </Button>
        </Grid>

        <Grid item xs={4} >
          <Button variant='contained' style={style}>
            12.30
          </Button>
        </Grid>

        <Grid item xs={4} >
          <Button variant='contained' style={style}>
            12.45
          </Button>
        </Grid>

        <Grid item xs={4} >
          <Button variant='contained' style={style}>
            01.00
          </Button>
        </Grid>

        <Grid item xs={4} >
          <Button variant='contained' style={style}>
            01.15
          </Button>
        </Grid>

        <Grid item xs={4} >
          <Button variant='contained' style={style}>
            01.30
          </Button>
        </Grid>

        <Grid item xs={4} >
          <Button variant='contained' style={style}>
            01.45
          </Button>
        </Grid>

        <Grid item xs={4} >
          <Button variant='contained' style={style}>
            02.00
          </Button>
        </Grid>

        <Grid item xs={4} >
          <Button variant='contained' style={style}>
            02.15
          </Button>
        </Grid>

        <Grid item xs={4} >
          <Button variant='contained' style={style}>
            02.30
          </Button>
        </Grid>

        <Grid item xs={4} >
          <Button variant='contained' style={style}>
            02.45
          </Button>
        </Grid>

      </Grid>
    </div>
  );
}
