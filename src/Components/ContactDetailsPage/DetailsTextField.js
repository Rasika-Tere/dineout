
// this is the component to add the text details 

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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
      <TextField id="filled-basic" label="Name" variant="filled" />
      {/* i duplicated the text field to add the phone number  */}
      <TextField id="filled-basic" label="Mobile No." variant="filled" />
      {/* i duplicated the text field to add the email id  */}
      <TextField id="filled-basic" label="Email Id" variant="filled" />
    </form>
  );
}
