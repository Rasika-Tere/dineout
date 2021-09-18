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
      <TextField id="filled-basic" label="Reva Sahani" variant="filled" />
      <TextField id="filled-basic" label="+91 987x xxxx" variant="filled" />
      <TextField id="filled-basic" label="revasahani@example.com" variant="filled" />
    </form>
  );
}
