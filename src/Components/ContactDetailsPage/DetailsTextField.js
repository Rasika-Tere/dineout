
// this is the component to add the text details 

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import HomeGrid from '../HomePage/HomeGrid';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function DetailsTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      {/* for adding the name */}

      <Grid container spacing={3} justifyContent="center"
      alignItems="center"
> 
  
      <TextField id="filled-basic" label="Name" variant="filled" />
      {/* i duplicated the text field to add the phone number  */}
      <TextField id="filled-basic" label="Mobile No." variant="filled" />
      {/* i duplicated the text field to add the email id  */}
      <TextField id="filled-basic" label="Email Id" variant="filled" />
      {/* i duplicated the text field to add the email id  */}

      <Grid xs={12}> 
        Select No. of Guests (max.20)
        <TextField id="filled-basic" label="1" variant="filled" />
      </Grid>
      </Grid>
    </form>
  );
}
