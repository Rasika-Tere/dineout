
// this is the component to add the name details 

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      //  changed the size of the text box
      width: '36.7ch',
      background: '#F6F2EB',
      borderRadius: 12,
      // minheight: 15,
      height: 38,
    },

  },
}));

export default function NameTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root}  noValidate autoComplete="off">


      <TextField id="" label="Name" variant="filled" />
    

    </form>
  );
}
