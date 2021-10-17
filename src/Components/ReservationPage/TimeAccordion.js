
// added buttons within the accordian for the timeoptions

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TimeButtons from './TimeButtons';


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    borderRadius: 15,
    backgroundColor: "#F6F2EB",
    padding: 2
    
  },
  space: {
    paddingLeft: 10,
    backgroundColor: "#F6F2EB",
    
  },

  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    fontFamily: 'Futura',
    color: 'grey',
  },

  button: {
    backgroundColor:"#FF645A",
      Color: 'white',
      fontFamily: 'futura',
      fontSize: 14.5,
      fontWeight: 'normal',
      height: 40,
   },
}));

export default function TimeAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Select Time</Typography>
        </AccordionSummary>
        <AccordionDetails>

          {/* spacing of the time buttons */}
          <TimeButtons className={classes.button} />

        </AccordionDetails>
      </Accordion>


    </div>
  );
}
