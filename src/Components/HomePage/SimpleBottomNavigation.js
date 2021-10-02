import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import { AccountBalance, AccountBalanceWallet, Group, LocalDining, Payment } from '@material-ui/icons';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    width: 414,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
     {/* <Grid container spacing ={0} > */}
      <Grid item xs={1.5}>
      <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      </Grid>
     
      <Grid item xs={1.5}>
      <BottomNavigationAction label="Book a Table" icon={<LocalDining />} />
      </Grid>
     
      <Grid item xs={1.5}>
      <BottomNavigationAction label="Dineout Passport" icon={<AccountBalanceWallet />} />
      </Grid>
      
      <Grid item xs={1.5}>
      <BottomNavigationAction label="Payment" icon={<Payment />} />
      </Grid>
      
      <Grid item xs={1.5}>
      <BottomNavigationAction label="Community" icon={<Group />} />
      </Grid>

      {/* </Grid> */}
   
    </BottomNavigation>
  );
}
