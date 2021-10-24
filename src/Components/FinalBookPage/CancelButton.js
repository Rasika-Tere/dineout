
// download as image pop up button

import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),

    }
  },
  // button customization
  button: {
    background: '#5C284F',
    borderRadius: 9,
    minheight: 150,
    color: 'white',
    fontFamily: 'futura',
    fontSize: 14.5,
    fontWeight: 'normal',
    height: 40,
    padding: '0 60px',
    right: 200,
    bottom: 230,

  },




}));

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  return (
    <div>
      {/* download as image pop up button */}

      <Button variant="contained" className={classes.button} onClick={handleClickOpen}>
        Cancel Booking
      </Button>




      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Booking Cancellation"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Would you like to cancel your Reservation at Hurrycane ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            No
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
