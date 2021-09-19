import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Fab from '@material-ui/core/Fab';
import GuestInput from './GuestInput';

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));  

export default function GuestNumber() {
    const classes = useStyles();

  return (
    <ButtonGroup disableElevation variant="contained" color="secondary">
     <Fab color="secondary" aria-label="minus">
      <RemoveIcon/>
      </Fab>
    <GuestInput/> 
      <Fab color="secondary" aria-label="add">
        <AddIcon />
      </Fab>

    </ButtonGroup>
  );
}
