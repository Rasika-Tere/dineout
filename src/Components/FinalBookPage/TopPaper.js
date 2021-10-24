import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import NameTextFields from '../ContactDetailsPage/NameTextField';
import TrialSearchBar from './TrialSearchBar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0),
      width: theme.spacing(120),
      height: theme.spacing(8),
      left: theme.spacing(0),
      right: theme.spacing(20),

    //   width: '100%',
    //   height: 50,
//     margintop: 100,
//   marginbottom: 100,
//   marginright: 150,
//   marginleft: 80,
    },
  },
}));

export default function TopPaper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
     <Paper><TrialSearchBar/></Paper>
     
     
      {/* <Paper elevation={1} /> */}
      
    </div>
  );
}
