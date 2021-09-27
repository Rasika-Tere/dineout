
// this is the centre card

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import AlertDialog from './DownloadAsImagePopup';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function FinalCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader


        title="Hurrycane"
        // i chnaged the title
        subheader="September 14, 2016"
        
      />
      <CardMedia
        className={classes.media}
        image="https://im1.dineout.co.in/images/uploads/restaurant/sharpen/3/h/u/p34715-15465832805c2efcf0192e6.jpg?tr=tr:n-medium"
        title="Paella dish"

      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Reservation Details
          Reva Sahani
          Friday, August 20, 2021 at 11.00AM
          2 Guests
          ID: DO XXXX XXXX
        </Typography>
        <AlertDialog />
      </CardContent>


    </Card>
  );
}
