import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      color: 'white',
      background: '#FF645A',

    },
  },
}));

export default function FoodButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
     
      <Button >
       Oriental
      </Button>
      
      <Button  >
       Indian
      </Button>

      <Button  >
       Mexican
      </Button>

      <Button  >
       Korean
      </Button>

    </div>
  );
}
