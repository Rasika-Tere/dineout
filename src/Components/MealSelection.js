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
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
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
        <Grid item xs={4} md={12} spacing={3}>
        <Button variant="contained" color="Secondary">
        Breakfast  
        </Button>
        </Grid>
        
        <Grid item xs={4} md={12} spacing={3}>
        <Button variant="contained" color="Secondary">
        Lunch
        </Button>
        </Grid>
        
        <Grid item xs={4} md={12} spacing={3}>
        <Button variant="contained" color="Secondary">
        Snacks
        </Button>
        </Grid>
       
        <Grid item xs={4} md={12} spacing={3}>
        <Button variant="contained" color="Secondary">
        Dinner
        </Button>
        </Grid>

        </AccordionDetails>
      </Accordion>
      
      
    </div>
  );
}
