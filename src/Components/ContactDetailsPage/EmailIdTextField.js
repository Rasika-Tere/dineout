
// the component to add the email id details 

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      //  changed the size of the text box
      width: '36.7ch',
    },
  },
}));

export default function EmailIdTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">

      <TextField id="filled-basic" label="Email Id" variant="filled" />


    </form>
  );
}
