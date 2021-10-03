
// this is the centre card

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import AlertDialog from './DownloadAsImagePopup';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  root: {

    maxWidth: 900,
    textAlign: 'left',
    padding: 0.2,
    height: 560,
    position: 'centre',
    aligncontent: 'centre',
    width: 300,

  },


  media: {
    height: 100,
    paddingTop: '56.25%', // 16:9
  },



}));

export default function FinalCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (

    <Grid container spacing={3}

      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: '100vh' }}

    >
      <Grid item xs={12} lg={12}>

        <Card className={classes.root}>

          <CardHeader


            title="Hurrycane"
            // changed the title
            subheader="September 14, 2016"

          />
          <CardMedia
            className={classes.media}

            image="https://im1.dineout.co.in/images/uploads/restaurant/sharpen/3/h/u/p34715-15465832805c2efcf0192e6.jpg?tr=tr:n-medium"

          />
          <CardContent>
            {/* the text below the card */}
            <Typography variant="body2" color="textSecondary" component="p">
              Reservation Details
            </Typography>

            <Typography variant="body2" color="textSecondary" component="p">
              Reva Sahani
            </Typography>

            <Typography variant="body2" color="textSecondary" component="p">
              Friday, August 20, 2021 at 11.00AM
            </Typography>

            <Typography variant="body2" color="textSecondary" component="p">
              2 Guests
            </Typography>

            <Typography variant="body2" color="textSecondary" component="p">
              ID: DO XXXX XXXX
            </Typography>

            {/* download as image button */}
            <AlertDialog />

          </CardContent>

        </Card>
      </Grid>
    </Grid>
  );
}
