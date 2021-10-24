import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    background: '#FF645A'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    
  },
}));

export default function FooterContent() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
       
        <Grid item xs={4}>
          Delhi
        </Grid>
       
        <Grid item xs={4}>
         Kolkatta
        </Grid>
       
        <Grid item xs={4}>
         Banglore
        </Grid>

        <Grid item xs={4}>
         Goa
        </Grid>
 
        <Grid item xs={4}>
         Pune
        </Grid>
 
        <Grid item xs={4}>
         Aurangabad
        </Grid>
        
        <Grid item xs={4}>
         Chennai
        </Grid>
        
        <Grid item xs={4}>
        Ajmer
        </Grid>
        
        <Grid item xs={4}>
        Jaipur
        </Grid>

         </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={1}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}
