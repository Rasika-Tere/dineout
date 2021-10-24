
// added buttons within the accordian for the meal options

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "row",
    width: 600,

  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    fontFamily: 'Futura',
    color: 'grey',
  },

  space: {
    paddingLeft: 10,
    backgroundColor: "#F6F2EB",
    width: 2500

  },

  button: {

    backgroundColor: "#FF645A",
    fontFamily: 'futura',
    fontSize: 8,
    fontWeight: 'normal',
    fontColor: 'grey',
    height: 25,
    padding: 1,
    borderColor: "#FF645A",
    
  },


}));

export default function MealSelection() {
  const classes = useStyles();

  return (
    <div className={classes.root}>


      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Meal</Typography>
        </AccordionSummary>
        <AccordionDetails>

          {/* reapeted the buttons here*/}

          <Grid container spacing={1} justifyContent="centre"
            direction="row"
            alignItems="center"
            justify="center"
          >


            <Grid item xs={3} md={12} spacing={1}>
              <Button variant="outlined" className={classes.button}>
                Breakfast
              </Button>
            </Grid>

            <Grid item xs={3} md={12} spacing={1}>
              <Button variant="outlined" className={classes.button}>
                Lunch
              </Button>
            </Grid>

            <Grid item xs={3} md={12} spacing={1}>
              <Button variant="outlined" className={classes.button}>
                Snacks
              </Button>
            </Grid>

            <Grid item xs={3} md={12} spacing={1}>
              <Button variant="outlined" className={classes.button}>
                Dinner
              </Button>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>


    </div>
  );
}
