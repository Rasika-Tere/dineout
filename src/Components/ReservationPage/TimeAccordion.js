
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
    width: '100%',
    background: '#FF645A',


  },
  space: {
    paddingLeft: 10,
    
  },

  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    
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
          <Typography className={classes.heading}>Time</Typography>
        </AccordionSummary>
        <AccordionDetails>

          {/* spacing of the time buttons */}
          <TimeButtons className={classes.space} />

        </AccordionDetails>
      </Accordion>


    </div>
  );
}
