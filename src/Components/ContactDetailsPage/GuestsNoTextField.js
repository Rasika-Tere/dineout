
// the component to add the guest details 

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      //  changed the size of the text box
     width: '36.7ch',
      // borderRadius: 3,
      // background: '#F6F2EB',
      // borderRadius: 12,
      // // minheight: 15,
      // height: 38,

    },
  },
}));

export default function GuestNoTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">

      <TextField id="filled-basic" label="Number of people arriving" variant="filled" />

    </form>
  );
}
