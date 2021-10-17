
// this component is for selecting the date and ; removed the extra date and time picker.

import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,

  KeyboardDatePicker,
} from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      fontFamily: 'Futura',
      color: 'grey',
    }

  },
  date: {
    background: '#FF645A',
    borderRadius: 9,
    minheight: 150,
    color: 'white',
    fontFamily: 'futura',
    fontSize: 14.5,
    fontWeight: 'normal',
    height: 40,
    padding: '0 115px',
  },

}));

export default function MaterialUIPickers() {
  // The first commit of Material-UI
  const classes = useStyles();

  const [selectedDate, setSelectedDate] = React.useState(new Date('2021-09-18T21:11:54'));


  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} className={classes.date}>
      <Grid container justifyContent="space-around">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Select Date"
          fullWidth
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
            background: '#F6F2EB',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
