
// this is the component to add the text details 

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      //  changed the size of the text box
      width: '30ch',
    },
  },
}));

export default function NameTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">


      <TextField id="filled-basic" label="Name" variant="filled" />
      {/* i duplicated the text field to add the name  */}

    </form>
  );
}
