import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import { AccountBalance, AccountBalanceWallet, Group, LocalDining, Payment } from '@material-ui/icons';


const useStyles = makeStyles({
  root: {
    width: 500,
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
      <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction label="Book a Table" icon={<LocalDining />} />
      <BottomNavigationAction label="Dineout Passport" icon={<AccountBalanceWallet />} />
      <BottomNavigationAction label="Payment" icon={<Payment />} />
      <BottomNavigationAction label="Community" icon={<Group />} />
    </BottomNavigation>
  );
}
